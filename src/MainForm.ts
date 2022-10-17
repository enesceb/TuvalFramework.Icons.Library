import { TForm } from '@tuval/forms';
import { AppController } from './App/Controllers/AppController';

export class MainForm extends TForm {
    m_Toolbar: any;
    m_tbiLabel: any;
    public override InitComponents() {
        this.Width = 1120;
        this.Height = 700;

        this.ShowHeader = true;

        const appController = new AppController();
        appController.Bind(this);
        this.Controls.Add(appController);
    }
}