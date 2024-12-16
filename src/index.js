const unneeded = document.querySelector(".deleteMe")
unneeded.remove()

import "./styles.css"

import { taskButtonLogic } from "./taskBtnLogic";
import { allTasksBtnLogic } from "./allTasks";
import { todayBtnLogic } from "./today";
import { allTasksArray } from "./taskFormLogic";
import { projectLogic } from "./projectLogic";
import { projectButtonLogic } from "./projectButtonLogic";
todayBtnLogic();
allTasksBtnLogic(allTasksArray);
taskButtonLogic();
projectLogic();
projectButtonLogic();


