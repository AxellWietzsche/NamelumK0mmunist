import React, { Component } from "react";
import "../selectable.css";
import "./IconSelection.css";
import portraits, { portraitsAltText, defaultPortrait } from "../assets";

import ButtonPrompt from "./ButtonPrompt";
import { SendWSCommand, WSCommandType } from "../types";

type IconSelectionProps = {
  playerToIcon: Record<string, string>;
  players: string[];
  sendWSCommand: SendWSCommand;
  user: string;
  onConfirm: () => void;
};

class IconSelection extends Component<IconSelectionProps> {
  constructor(props: IconSelectionProps) {
    super(props);
    this.onConfirmButtonClick = this.onConfirmButtonClick.bind(this);
    this.getIconButtonHML = this.getIconButtonHML.bind(this);
    this.isIconInUse = this.isIconInUse.bind(this);
  }

  isIconInUse(iconID: string) {
    let playerOrder = this.props.players;
    for (let i = 0; i < playerOrder.length; i++) {
      let player = playerOrder[i];
      if (this.props.playerToIcon[player] === iconID) {
        return true;
      }
    }
    return false;
  }

  onClickIcon(iconID: string) {
    if (!this.isIconInUse(iconID)) {
      this.props.sendWSCommand({
        command: WSCommandType.SELECT_ICON,
        icon: iconID,
      });
    }
  }

  onConfirmButtonClick() {
    if (this.props.playerToIcon[this.props.user] !== defaultPortrait) {
      this.props.onConfirm();
    }
  }

  getIconButtonHML(portraitNames: string[]): React.JSX.Element {
    let currPortrait = this.props.playerToIcon[this.props.user];

    const iconHTML = portraitNames.map((portraitID, index: number) => {
      if (!portraits[portraitID]) {
        return undefined;
      }
      let isEnabled = !this.isIconInUse(portraitID) || portraitID === currPortrait;
      let isSelected = currPortrait === portraitID;
      return (
        <img
          id={"icon"}
          key={index}
          className={
            "selectable" +
            (isSelected ? " selected" : "") +
            (!isEnabled ? " disabled" : "")
          }
          alt={portraitsAltText[portraitID]}
          src={portraits[portraitID]}
          draggable={false}
          onClick={() => this.onClickIcon(portraitID)}
        ></img>
      );
    });

    return <div id={"icon-container"}>{iconHTML}</div>;
  }

  render() {
    const allPortraits = Object.keys(portraits).filter(
      (id) => id !== defaultPortrait
    );

    return (
      <ButtonPrompt
        label={"OYUNÇUNUN GÖRÜNÜŞÜ"}
        renderHeader={() => {
          return (
            <>
              <p>Görünüş seç, sonra təsdiqlə.(Mənim ikonumu seçmə, öz ikonunun əlavə edilməsini istəsən dm)</p>
              {this.getIconButtonHML(allPortraits)}
            </>
          );
        }}
        buttonDisabled={
          this.props.playerToIcon[this.props.user] === defaultPortrait
        }
        buttonOnClick={this.onConfirmButtonClick}
      ></ButtonPrompt>
    );
  }
}

export default IconSelection;