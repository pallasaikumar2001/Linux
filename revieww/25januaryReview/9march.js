//Write a function that finds the most liked comment in the dataset and returns an object like this:
// {
//   commentId: 12,
//   body: "Keep up the incredible work!",
//   likes: 10,
//   author: "Scarlett Bowman"
// }

const data = require("./dataset2.json");

// function getMostLikedComments() {
//     return data.comments.reduce(
//         (acc, comment) => {
//             const { id, body, likes, user } = comment;
//             if (comment.likes > acc.likes) {
//                 acc = {
//                     commentId: id,
//                     body: body,
//                     likes: likes,
//                     author: user.fullName,
//                 };
//             }
//             return acc;
//         },
//         { likes: 0 }
//     );
// }

// let result = getMostLikedComments();

// console.log(result);
// Write a function that groups comments by postId and sorts the
//comments within each post by the number of likes (in descending order).

function getSortedcommentsBypostId() {
  const groupBypostId = data.comments.reduce((acc, comment) => {
    const { postId } = comment;
    acc[postId] = acc[postId] || [];
    acc[postId].push(comment);
    return acc;
  }, {});
  //  console.log(groupBypostId);

  //  return sortedComments;
  return Object.entries(groupBypostId).reduce((acc, [postId, comments]) => {
    // console.log(postId, comments);
    const sortedComments = comments.sort((a, b) => {
      return b.likes - a.likes;
    });
    acc[postId] = sortedComments;
    return acc;
  }, {});
}

let result = getSortedcommentsBypostId();

console.log(JSON.stringify(result, null, 2));
