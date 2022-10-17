import { ModuleLoader } from '@tuval/core';
import { TApplication } from '@tuval/forms';
import { MainForm } from './MainForm';

const manifest = require('./manifest');
declare var tuval$core;

function App(manifest: any) {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    }
}

@App(manifest)
export class IconLibrary extends TApplication {
    
    private m_tbiLabel: any;
    public InitComponents() {

        debugger;
        this.Icon = manifest.application.icon;
        const fileExprorer = new MainForm();


        //fileExprorer.Controls.Add(button);
        this.SetMainForm(fileExprorer);
        setTimeout(()=> this.Start(), 100);
    }
}