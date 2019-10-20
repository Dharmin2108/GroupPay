import { Component, OnInit, HostListener } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-svgator',
  templateUrl: './svgator.component.html',
  styleUrls: ['./svgator.component.css']
})
export class SvgatorComponent implements OnInit {
  svgLis: [];
  index: number = 0;
  slideShow: any;
  isSlideShowRunning: boolean = true;
  smallSvgs: [];
  svgTexts: any;
  btnColors: {} = {
    0: 'teal',
    1: 'purple',
    2: 'red',
    3: 'teal'
  }
  constructor() { 
  }

  onClickSmallSvg(index){
    if(this.index != index){
      this.animateSignUpButton(this.index, index);
      this.hideSvg(this.index);
      window.setTimeout(()=>{
        this.showSvg(index);
      },1000)
      this.index = index;
      if(this.isSlideShowRunning){
        window.clearInterval(this.slideShow);
        this.isSlideShowRunning = false;
      }
    }
  }
  showSvg(index = this.index) {
    var element = this.svgLis[index];
    var smallSvg = this.smallSvgs[index];
    var text = this.svgTexts[index];

    $(element).addClass('animated fade-in');
    $(element).removeClass('hidden');
    $(text).addClass('animated fade-in');
    $(text).removeClass('hidden');
    $(smallSvg).addClass('animated fade-in-icon');
    $(smallSvg).removeClass('opacity-40');
    window.setTimeout(()=>{
      $(element).removeClass('animated fade-in');
      $(text).removeClass('animated fade-in');
      $(smallSvg).removeClass('animated fade-in-icon');
    },1000)
  }
  
  hideSvg(index = this.index){
    var element = this.svgLis[index];
    var smallSvg = this.smallSvgs[index];
    var text = this.svgTexts[index];

    $(element).addClass('animated fade-out');
    $(text).addClass('animated fade-out');
    $(smallSvg).addClass('animated fade-out-icon');
    window.setTimeout(()=>{
      $(element).removeClass('animated fade-out');
      $(element).addClass('hidden');
      $(text).removeClass('animated fade-out');
      $(text).addClass('hidden');
      $(smallSvg).addClass('opacity-40');
      $(smallSvg).removeClass('animated fade-out-icon');
    },1000)
    if(this.isSlideShowRunning){
      this.index++;
      if(this.index == 4){
        this.index = 0;
      }
      this.animateSignUpButton(index, index+1);
    }
  }

  animateSignUpButton(currIndex, nextIndex) {
    if(nextIndex == 4){
      nextIndex = 0;
    }
    var signUpButton = $('#siguup-button');
    var classesToAddAndRemove = `animated ${this.btnColors[currIndex]}-to-${this.btnColors[nextIndex]}`;
    $(signUpButton).removeClass(`bg-${this.btnColors[currIndex]}`);
    $(signUpButton).addClass(classesToAddAndRemove);
    window.setTimeout(()=>{
      $(signUpButton).removeClass(classesToAddAndRemove);
      $(signUpButton).addClass(`bg-${this.btnColors[nextIndex]}`);
    },1500)
  }
  ngOnInit() {
    this.svgLis = $('.svgs > li');
    this.smallSvgs = $('.small-svgs  li');
    this.svgTexts = $('.svg-text');

    this.slideShow = window.setInterval(()=>{
      this.hideSvg();
      window.setTimeout(()=>{
        this.showSvg();
      },1000)
    },5000)
  }
  // @HostListener('window:resize', ['$event'])
  // onResize(event){
  //   console.log("Width: " + event.target.innerWidth);
  // }
}
