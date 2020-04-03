import ScrollerBar from './modules/ScrollerBar';
import scroller from './modules/Scroller';
import TranslateXFrontalHeadlinesOnScroll from './modules/TranslateXFrontalHeadlinesOnScroll';
import AnimateMileStonesOnScroll from './modules/AnimateMileStonesOnScroll';
import TranslateXHeadlinesOnScroll from './modules/TranslateXHeadlinesOnScroll';
import TransformWorkHeadlineOnScroll from './modules/TransformWorkHeadlineOnScroll';
import TranslateXStrokeHeadlinesOnScroll from './modules/TranslateXStrokeHeadlinesOnScroll';
import FixedHeaderPosition from './modules/FixedHeaderPosition';
import AnimateAvailabilityMessageOnScroll from './modules/AnimateAvailabilityMessageOnScroll';
import ScrollToOnNavigationLinkClick from './modules/ScrollToOnNavigationLinkClick';
import TranslateNavLinksOnWaypoints from './modules/TranslateNavLinksOnWaypoints';
import AnimateTextOnScroll from './modules/AnimateTextOnScroll';
import ChangeAdOnTiming from './modules/ChangeAdOnTiming';

new ChangeAdOnTiming(scroller);

new AnimateTextOnScroll(scroller);

new TranslateNavLinksOnWaypoints(scroller);
new ScrollToOnNavigationLinkClick(scroller);
new AnimateAvailabilityMessageOnScroll(scroller);
new FixedHeaderPosition(scroller);
new TranslateXStrokeHeadlinesOnScroll(scroller);
new TransformWorkHeadlineOnScroll(scroller);
new TranslateXHeadlinesOnScroll(scroller);
new AnimateMileStonesOnScroll(scroller);
new TranslateXFrontalHeadlinesOnScroll(scroller);
new ScrollerBar(scroller);
