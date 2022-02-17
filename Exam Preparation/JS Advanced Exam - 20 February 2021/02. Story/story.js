class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    };
    get likes() {
        let result = '';
        if (this._likes.length == 0) {
            result = `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            result = `${this._likes[0]} likes this story!`;
        } else {
            result = `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        };
        return result;
    };
    like(username) {
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        };
        if (username == this.creator) {
            throw new Error('You can\'t like your own story!');
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    };
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error('You can\'t dislike this story!');
        };
        this._likes.splice(this._likes.indexOf(username), 1);
        return `${username} disliked ${this.title}`
    };
    comment(username, content, targetId) {
        let nextId = this._comments.length + 1;
        if (targetId == undefined || !this._comments.some(x => x.id == targetId)) {
            let newComment = {
                id: nextId,
                username,
                content,
                replies: [],
            };
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;
        };
        if (this._comments.some(x => x.id == targetId)) {
            let target = this._comments.find(x => x.id == targetId);
            let targetIndex = target['id'];
            let replyIndex = target['replies'].length;
            let newReply = {
                id: `${targetIndex}.${replyIndex + 1}`,
                username,
                content,
            };
            target['replies'].push(newReply);
            return 'You replied successfully';
        };
    };
    toString(sortingType) {
        let result = [];

        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push('Comments:');
        if (this._comments.length == 0) {
            return result.join('\n');
        };
        if (sortingType == 'asc') {
            this._comments.sort((a, b) => a['id'] - b['id']);
        } else if (sortingType == 'desc') {
            this._comments.sort((a, b) => b['id'] - a['id']);
        } else if (sortingType == 'username') {
            this._comments.sort((a, b) => a['username'].localeCompare(b['username']));
        };
        for (const comment of this._comments) {
            result.push(`-- ${comment['id']}. ${comment['username']}: ${comment['content']}`);
            if (comment['replies'].length > 0) {
                if (sortingType == 'asc') {
                   comment['replies'].sort((a, b) => a['id'] - b['id']);                
                } else if (sortingType == 'desc') {
                   comment['replies'].sort((a, b) => b['id'] - a['id']);            
                } else if (sortingType == 'username') {
                    comment['replies'].sort((a, b) => a['username'].localeCompare(b['username']));
                };
                for (const reply of comment['replies']) {
                    result.push(`--- ${reply['id']}. ${reply['username']}: ${reply['content']}`);
                }
            };
        };
        return result.join('\n');
    };
};


let art = new Story("My Story", "Anny");
// art.like("Pol");
// art.like("Emo");
// art.like("al");
// console.log(art._likes);
// // //art.dislike("Emo");
// // console.log(art.dislike("Emo"));
// // //art.comment("Sammy", "Parvi testov komentar");
// // console.log(art.comment("Sammy", "Parvi testov komentar"));
// console.log(art.comment("Emo", "Vtori testov komentar", 15));
// console.log(art.comment("al", "treti testov komentar", 1));
// console.log(art.comment("Pol", "4-ti testov komentar", 0));


// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content")); //Ammy commented on My Story
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));  //You replied successfully
// console.log();
// console.log(art.toString('username'));
// console.log();
// art.like("Zane");
// console.log(art.toString('desc'));
console.log(art.toString('asc'));
//art.toString('asc');
