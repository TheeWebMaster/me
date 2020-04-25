import Transform from './Transform';
import ScrollInput from './ScrollInput';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateXFrontalHeadlinesOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.frontal-headline--to-translate');
    this.limits = [
      { start: 0, end: -200 },
      { start: 0, end: 200 },
    ];

    this.animate();
  }

  animate() {
    const costumScrollInput = new ScrollInput({
      start: 0,
      end: window.innerHeight,
    });

    this.elements.forEach((element, i) => {
      new Transform(element, costumScrollInput, this.limits[i]);
    });
  }
}

export default TranslateXFrontalHeadlinesOnScroll;
