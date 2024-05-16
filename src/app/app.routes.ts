import { Routes } from '@angular/router';
import { AlltasksComponent } from './components/pages/alltasks/alltasks.component';
import { ImportantTasksComponent } from './components/pages/important-tasks/important-tasks.component';
import { CompletedTasksComponent } from './components/pages/completed-tasks/completed-tasks.component';

export const routes: Routes = [
    {
        path:'',
        component : AlltasksComponent
    },
    {
        path : 'important',
        component : ImportantTasksComponent
    },
    {
        path : 'completed',
        component : CompletedTasksComponent
    }
];
