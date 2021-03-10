//Credit to Rebecca Estes - we started with her Yoga API and added  pose descriptions: https://github.com/rebeccaestes/yoga_api

// const newPoseBtn = document.getElementById("newPoseBtn");
const photoDIV = document.getElementById("photoDIV");

function getNewPose() {
  let exercise = exercises[Math.floor(Math.random() * exercises.length)];
  const exerciseItem = ` <div>
                        <h1>  ${exercise.english_name} Pose</h1>
                        <h2>  Sanskrit: ${exercise.sanskrit_name}</h2>
                        <img src="${exercise.img_url}" width="150px" height="150px" class="exerciseImage" />
                        <p><b>Description:</b>  <br><i>${exercise.description}</i></p>
                        <button onclick=getNewPose() class="newPoseBtn">Get New Pose</button>
                        </div>
`;
  photoDIV.innerHTML = exerciseItem;
}

getNewPose();