import { int } from '@tuval/core';
import { bindState, cLeading, CornerRadiusTypes, cTop, ForEach, HStack, Icon, Text, VStack, Color, TextField, IconLibrary } from '@tuval/forms';

export namespace Views {
    export const SearchBar = (text: string, action: Function) =>
    HStack({ spacing: 5 })(
        TextField().onTextChange((value) => action(value))
            .fontSize(14).placeholder("Search Icons"),
        Icon(IconLibrary.Search).size(20)
    ).cursor("pointer")
        .marginTop("15px")
        .width(500)
        .height(41)
        .background("white")
        .fontWeight("600")
        .padding("5px 10px")
        .cornerRadius(10)
        .border({ default: "1px solid rgba(125,125,125,0.5)", hover: "1px solid darkgray" })
}


