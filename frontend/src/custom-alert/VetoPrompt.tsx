import React, { Component } from "react";
import ButtonPrompt from "./ButtonPrompt";
import { SERVER_TIMEOUT } from "../constants";
import { SendWSCommand, WSCommandType } from "../types";

type VetoPromptProps = {
  sendWSCommand: SendWSCommand;
  electionTracker: number;
};

type VetoPromptState = {
  waitingForServer: boolean;
};

class VetoPrompt extends Component<VetoPromptProps, VetoPromptState> {
  constructor(props: VetoPromptProps) {
    super(props);
    this.state = {
      waitingForServer: false,
    };
  }

  onButtonClick(accepted: boolean) {
    this.setState({ waitingForServer: true });
    setTimeout(
      () => this.setState({ waitingForServer: false }),
      SERVER_TIMEOUT
    );

    this.props.sendWSCommand({
      command: WSCommandType.REGISTER_PRESIDENT_VETO,
      veto: accepted,
    });
  }

  render() {
    return (
      <ButtonPrompt
        label={"QANUNVERİCİLİK VETOSU"}
        renderHeader={() => {
          return (
            <>
              <p className={"left-align"}>
                Kansler seçimə veto qoyulmasını xahiş edib.
              </p>
              {this.props.electionTracker === 2 && (
                <p className={"left-align highlight"}>
                  Əgər veto qəbul edilərsə, çəkilməyi gözləyən kartlar dəstəsinin ən
                   üstündəki siyasət avtomatik olaraq qüvvəyə minəcək.
                </p>
              )}
              {this.props.electionTracker !== 2 && (
                <p className={"left-align"}>
                  Əgər veto qəbul edilərsə, qalan siyasətlər kənarlaşdırılacaq
                  və seçki izləyicisi 1 vahid irəliləyəcək.
                </p>
              )}
              <p className={"left-align"}>
                Əks təqdirdə, kanslerdən adi qaydada siyasət həyata keçirməsi
                tələb olunacaq.
              </p>
              <br />
            </>
          );
        }}
        footerText={"Veto qəbul edilsin?"}
        renderButton={() => {
          return (
            <>
              <button
                onClick={() => this.onButtonClick(false)}
                disabled={this.state.waitingForServer}
              >
                RƏDD ET
              </button>
              <button
                onClick={() => this.onButtonClick(true)}
                disabled={this.state.waitingForServer}
              >
                QƏBUL ET
              </button>
            </>
          );
        }}
      />
    );
  }
}

export default VetoPrompt;
