import updateHeader from "./header.js";
import updateApproach from "./section/approach.js";
import updateConnect from "./section/connect.js";
import updateHome from "./section/home.js";
import updatePromise from "./section/promise.js";
import updateStory from "./section/story.js";
import updateStudio from "./section/studio.js";

$(function () {
  const initialize = () => {
    updateHeader();
    updateHome();
    updatePromise();
    updateApproach();
    updateStory();
    updateConnect();
    updateStudio();
  };

  initialize();
});
