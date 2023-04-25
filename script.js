const screen = document.querySelector(".screen");
const btn = document.querySelectorAll(".btn");
const buttons = document.querySelector(".buttons");
const c = document.querySelector("#c");
const backspace = document.querySelector("#backspace");
const equals = document.querySelector("#equals");



// document.addEventListener("keydown", (event)=>{
//     switch (event.key) {
//         case 1:
//             screen.textContent += 1;
//             break;
//         case 2:
//             screen.textContent += 2;
//             break;
//         case 3:
//             screen.textContent += 3;
//             break;
//         case 4:
//             screen.textContent += 4;
//             break;
//         case 5:
//             screen.textContent += 5;
//             break;
//         case 6:
//             screen.textContent += 6;
//             break;
//         case 7:
//             screen.textContent += 7;
//             break;
//         case 8:
//             screen.textContent += 8;
//             break;    
//         case 9:
//             screen.textContent += 9;
//             break;
//         case 0:
//             screen.textContent += 0;
//             break;            
//         default:
//             break;
//     }
// })

btn.forEach(button => {
    button.addEventListener("click", ()=> {
        const btnClicked = button.textContent;

        if(screen.textContent.length >= 19){
            alert("Digit limit reached")
            return;
        }

        if(button.id === "c"){
            screen.textContent = "0";
            return;
        }

        if (button.id === "backspace"){
                if (screen.textContent.length === 1 || screen.textContent === "Syntax Error"){
                    screen.textContent = "0";
                } else {
                    screen.textContent = screen.textContent.slice(0, -1);   
                }
                return;
            }

        if(button.id === "equals"){
            try {
                screen.textContent = eval(screen.textContent);
            } catch (error) {
                screen.textContent = "Syntax Error"
            }
            return;
        }

        if (screen.textContent === "0" || screen.textContent === "Syntax Error"){
            screen.textContent = btnClicked;
        } else {
            screen.textContent += btnClicked;
        }

    })
});
