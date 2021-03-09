//Credit to Rebecca Estes - we started with her Yoga API and added  pose descriptions: https://github.com/rebeccaestes/yoga_api


const getInfoBtn = document.getElementById("getInfoBtn");
// infoDIV not currently in use
//const infoDIV = document.getElementById("infoDIV");
const photoDIV = document.getElementById("photoDIV");


for (let index = 0; index < exercises.length; index++) {
  let exercise = exercises[index];
  const exerciseItem = ` <div>
                            <h1> ${exercise.id}. ${exercise.english_name} Pose</h1>
                            <h2>  Sanskrit: ${exercise.sanskrit_name}</h2>
                            <img src="${exercise.img_url}" width="150px" height="150px" class="exerciseImage" />
                            <p><b>Description:</b>  <br><i>${exercise.description}</i></p>
                            </div>
                        `
  photoDIV.insertAdjacentHTML("beforeend", exerciseItem);
}

