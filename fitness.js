const getInfoBtn = document.getElementById("getInfoBtn");
const infoDIV = document.getElementById("infoDIV");
const photoDIV = document.getElementById("photoDIV");

// getInfoBtn.addEventListener("click", () => {
//   console.log(excercises);

for (let index = 0; index < exercises.length; index++) {
  let exercise = exercises[index];

  const exerciseItem = ` <div>
                            <h1> ${exercise.id}. ${exercise.english_name} Pose</h1>
                            <h2>  Sanskrit: ${exercise.sanskrit_name}</h2>
                            <img src="${exercise.img_url}"width="150" height="150" class="exerciseImage"></img>
                            <p><i>Description</i></p>
                            </div>

                                `;

  photoDIV.insertAdjacentHTML("beforeend", exerciseItem);
}
// // });

// fetch("https://github.com/rebeccaestes/yoga_api/blob/master/yoga_api.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((excercises) => {
//     for (let index = 0; index < excercises.length; index++) {
//       let excercise = excercises[index];

//       const excerciseItem = ` <div>
//                                       <h1> ${excercise.id}. ${excercise.sanskrit_name} (${excercise.english_name})</h1>
//                                       <img src="${excercise.img_url}"width="150" height="150" class="excerciseImage"></img>
//                                       <p><i>Description</i></p>
//                                       </div>

//                                           `;
//     }

//     photoDIV.insertAdjacentHTML("beforeend", excerciseItem);
//   });
