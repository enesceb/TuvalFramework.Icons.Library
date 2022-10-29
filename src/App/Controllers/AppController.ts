import {
    CornerRadiusTypes,
    cTop,
    cVertical,
    ForEach,
    HStack,
    Icon,
    PositionTypes,
    ScrollView,
    State,
    Text,
    TForm,
    UIController,
    UIImage,
    UIScene,
    VStack,
} from '@tuval/forms';
import { IconData } from '../../Resources/IconData/IconData';

import { Views } from '../../Resources/Views/Views';


const manifest = require('../../manifest');
export interface TuvalIcons {
    name: string;
    // category: string
    codepoint: string;
}



export class AppController extends UIController {

    @State()
    private menu_text: string;

    @State()
    private icons: TuvalIcons[] = IconData;

    @State()
    private showingIcons: any[];

    protected BindRouterParams() {
        this.showingIcons = this.icons;
    }

    protected InitController() {
        this.menu_text = 'About';

    }

    public Search(filterKey: string, filterText: string) {
        setTimeout(() => {
            this.showingIcons = this.icons.filter((item) =>
                item[filterKey]?.toLowerCase().indexOf(filterText?.toLowerCase()) > -1)
        }, 100)
    }

    public OnBindModel(form: TForm) {

    }
    public LoadView() {
        let slash = "\\";
        return UIScene(
            VStack({ alignment: cTop })(
                HStack(
                    HStack(
                        UIImage(manifest.application.icon).width(20).height(20)
                    ).minWidth('50px').width(50),
                    HStack(
                        Text('Tuval Icon Library').fontWeight('500')
                    )
                ).minHeight('40px').height(40).backgroundColor('#FDFDFD').borderBottom('1px solid #F2F2F2'),
                HStack(Text(''))
                    .height('0.1rem')
                    .background("linear-gradient(90deg, rgb(100, 91, 83) 0%, rgb(235, 82, 82) 18.23%, rgb(247, 143, 47) 34.37%, rgb(244, 193, 81) 48.96%, rgb(82, 187, 118) 66.15%, rgb(38, 165, 215) 82.29%, rgb(224, 105, 183) 100%)"),
                Views.SearchBar("Search Icons", value => this.Search("name", value)),
                ScrollView({ axes: cVertical })(
                    HStack({ alignment: cTop, spacing: 20 })(
                        ...ForEach(this.showingIcons)(icon =>
                            VStack(
                                Icon(icon.codepoint)
                                    .size(40)
                                    .padding('15px 20px')
                                    .cornerRadius(CornerRadiusTypes.Medium)
                                    .foregroundColor('#666')
                                    .border({ default: 'solid 1px rgb(215,215,215)', focus: '3px solid #0071F4' })
                                    .position(PositionTypes.Absolute)
                                    .left('50%')
                                    .top('40px')
                                    .transform('translate(-50%,-50%)')
                                    .tabIndex(0),
                                Text(icon.name)
                                    .position(PositionTypes.Absolute)
                                    .left('50%')
                                    .top('80px')
                                    .padding('0 8px')
                                    .transform('translate(-50%)')
                                    .width('100%')
                            ).width(112).height(128).cornerRadius(CornerRadiusTypes.Medium).marginBottom('10px')
                                .cursor("pointer").onClick(() => { navigator.clipboard.writeText(slash + icon.codepoint) })
                        )
                    ).wrap('wrap').padding(50)
                )

            )


        )

    }
}



