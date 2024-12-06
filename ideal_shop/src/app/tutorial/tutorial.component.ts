import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.css'
})
export class TutorialComponent implements OnInit {


  tutorialStep: number = 0;
  tutorialSteps: Element[];

  incrementTStep() {
    this.tutorialStep++;
    this.launchTutorialStep();
  }
  decrementTStep() {
    this.tutorialStep--;
    this.launchTutorialStep();
  }

  launchTutorialStep(){
    console.log(this.tutorialStep)



    if(this.tutorialStep == 1) {
      for(let i=0; i<this.tutorialSteps.length-1; i++) {
        if(this.tutorialSteps[i].className.includes("tutorialStepOne")) {
          this.tutorialSteps[i].className = "tutorialSurlignement";
        }
      }
    }
    if(this.tutorialStep == 2) {
      for(let i=0; i<this.tutorialSteps.length-1; i++) {
        if(this.tutorialSteps[i].className.includes("tutorialStepTwo")) {
          this.tutorialSteps[i].className = "tutorialSurlignement";
        }
      }
    }
    if(this.tutorialStep == 3) {
      for(let i=0; i<this.tutorialSteps.length-1; i++) {
        if(this.tutorialSteps[i].className.includes("tutorialStepThreeBorder")) {
          this.tutorialSteps[i].className = "tutorialBorder"
        } else if (this.tutorialSteps[i].className.includes("tutorialStepThreeRed")) {
          this.tutorialSteps[i].className = "tutorialSurlignementRed";
        } else if(this.tutorialSteps[i].className.includes("tutorialStepThree")) {
          this.tutorialSteps[i].className = "tutorialSurlignement";
        }
      }
    }
    if(this.tutorialStep == 4) {
      for(let i=0; i<this.tutorialSteps.length-1; i++) {
        if(this.tutorialSteps[i].className.includes("tutorialStepFourBorder")) { 
          this.tutorialSteps[i].className = "tutorialBorder"
        } else if(this.tutorialSteps[i].className.includes("tutorialStepFour")) {
          this.tutorialSteps[i].className = "tutorialSurlignement";
        }
      }
    }
    if(this.tutorialStep == 5) {
      for(let i=0; i<this.tutorialSteps.length-1; i++) {
        if(this.tutorialSteps[i].className.includes("tutorialStepFiveBorder")) { 
          this.tutorialSteps[i].className = "tutorialBorder"
        } else if (this.tutorialSteps[i].className.includes("tutorialStepFive")) {
          this.tutorialSteps[i].className = "tutorialSurlignement";
        }
      }
    }
  }


  ngOnInit(): void {
      
  }

  ngAfterViewInit():any {
     this.tutorialSteps = Array.from(document.getElementsByClassName("tuto"));

  }



}
