import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.css'
})
export class TutorialComponent implements OnInit {


  tutorialStep: number = 0;
  tutorialSteps: Element[];
  incOrDec!: Boolean;

  incrementTStep() {
    this.tutorialStep++;
    this.incOrDec = true;
    this.launchTutorialStep();
    
  }
  decrementTStep() {
    this.tutorialStep--;
    this.incOrDec = false;
    this.launchTutorialStep();
  }

  regenerateTutorial(stepNumber: string){
    for(let i=0; i< this.tutorialSteps.length-1; i++){

      if(this.tutorialSteps[i].className.includes("tutorialSurlignementRed")) { // À placer au dessus de tutoSurlign à cause de contain
        if(this.tutorialSteps[i].className.includes("filter btn-default")) {
          this.tutorialSteps[i].className = `filter btn-default tuto tutorialStep${stepNumber}Red`;
        } else {
          this.tutorialSteps[i].className = `tuto tutorialStep${stepNumber}Red`;
        }
      }

      if(this.tutorialSteps[i].className.includes("tutorialSurlignement")) {
        if(this.tutorialSteps[i].className.includes("inpInterval")) {
          this.tutorialSteps[i].className = `inpInterval tuto tutorialStep${stepNumber}`;
        } else {
          this.tutorialSteps[i].className = `tuto tutorialStep${stepNumber}`;
        } 
      } 

      if(this.tutorialSteps[i].className.includes("tutorialBorder")){
        this.tutorialSteps[i].className = `tuto tutorialStep${stepNumber}Border`
      }


        


/*
      if(this.tutorialSteps[i].className.includes("tutorialSurlignementRed")) {
        if(this.tutorialSteps[i].className.includes("filter btn-default")) {
          this.tutorialSteps[i].className = `filter btn-default tuto tutorialStep${stepNumber}Border`

          this.tutorialSteps[i].className = `filter btn-default tuto tutorialStep${stepNumber}Border`;
        }

        this.tutorialSteps[i].className = `filter btn-default tuto tutorialStep${stepNumber}Border`;

      }
      */
    }
  }

  launchTutorialStep(){
    console.log(this.tutorialStep)

    if(this.tutorialStep == 0) {
      if(!this.incOrDec) {
        this.regenerateTutorial("One");
      }
    }

    if(this.tutorialStep == 1) {
      if(!this.incOrDec) {
        this.regenerateTutorial("Two");
      }
      for(let i=0; i<this.tutorialSteps.length-1; i++) {
        if(this.tutorialSteps[i].className.includes("tutorialStepOne")) {
          this.tutorialSteps[i].className = "tutorialSurlignement";
        }
      }
    }
    if(this.tutorialStep == 2) {
      // Regen Steps

      if(!this.incOrDec) {
        this.regenerateTutorial("Three");
      } else {
        this.regenerateTutorial("One");
      }

      
      // Change classes
      for(let i=0; i<this.tutorialSteps.length-1; i++) {
        if(this.tutorialSteps[i].className.includes("tutorialStepTwo")) {
          if(this.tutorialSteps[i].className.includes("inpInterval")) {
            this.tutorialSteps[i].className = "inpInterval tutorialSurlignement";
          } else {
            this.tutorialSteps[i].className = "tutorialSurlignement";
          }
        }
      }
    }
    if(this.tutorialStep == 3) {
      if(!this.incOrDec) {
        this.regenerateTutorial("Four");
      } else {
        this.regenerateTutorial("Two");
      }
      for(let i=0; i<this.tutorialSteps.length-1; i++) {
        if(this.tutorialSteps[i].className.includes("tutorialStepThreeBorder")) {
          this.tutorialSteps[i].className = "tutorialBorder"
        } else if (this.tutorialSteps[i].className.includes("tutorialStepThreeRed")) {
          if(this.tutorialSteps[i].className.includes("filter btn-default")) {
            this.tutorialSteps[i].className = "filter btn-default tutorialSurlignementRed";
          } else {
            this.tutorialSteps[i].className = "tutorialSurlignementRed";
          }

          
        } else if(this.tutorialSteps[i].className.includes("tutorialStepThree")) {
          this.tutorialSteps[i].className = "tutorialSurlignement";
        }
      }
    }
    if(this.tutorialStep == 4) {
      if(!this.incOrDec) {
        this.regenerateTutorial("Five");
      } else {
        this.regenerateTutorial("Three");
      }
      for(let i=0; i<this.tutorialSteps.length-1; i++) {
        if(this.tutorialSteps[i].className.includes("tutorialStepFourBorder")) { 
          this.tutorialSteps[i].className = "tutorialBorder"
        } else if(this.tutorialSteps[i].className.includes("tutorialStepFour")) {
          this.tutorialSteps[i].className = "tutorialSurlignement";
        }
      }
    }
    if(this.tutorialStep == 5) {
      this.regenerateTutorial("Four");
      for(let i=0; i<this.tutorialSteps.length-1; i++) {
        console.log("coucou");
        if(this.tutorialSteps[i].className.includes("tutorialStepFiveSize")) { 
          this.tutorialSteps[i].className = "tutorialSize";
          
        } else if (this.tutorialSteps[i].className.includes("tutorialStepFive")) {
          this.tutorialSteps[i].className = "tutorialSurlignement";
          console.log("hahi!");
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
