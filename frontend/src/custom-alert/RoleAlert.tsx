import React, { Component } from "react";
import RoleHitler from "../assets/role-hitler.png";
import RoleLiberal1 from "../assets/role-liberal-1.png";
import RoleLiberal2 from "../assets/role-liberal-2.png";
import RoleLiberal3 from "../assets/role-liberal-3.png";
import RoleLiberal4 from "../assets/role-liberal-4.png";
import RoleLiberal5 from "../assets/role-liberal-5.png";
import RoleLiberal6 from "../assets/role-liberal-6.png";
import RoleFascist1 from "../assets/role-fascist-1.png";
import RoleFascist2 from "../assets/role-fascist-2.png";
import RoleFascist3 from "../assets/role-fascist-3.png";

import "./RoleAlert.css";
import { GameState, Role } from "../types";

const LiberalImages = [
  RoleLiberal1,
  RoleLiberal2,
  RoleLiberal3,
  RoleLiberal4,
  RoleLiberal5,
  RoleLiberal6,
];
const LiberalImagesAltText = [
  "Sənin gizli rolun LIBERALdır. Kartda eynəkli və çubuqlu bir kişinin yan baxışla baxdığı təsvir olunub.",
  "Sənin gizli rolun LIBERALdır. Kartda qıvırcıq saçlı və mirvarilər taxmış zərif bir qadın təsvir olunub.",
  "Sənin gizli rolun LIBERALdır. Kartda, zəvvar papağına bənzər bir papaq taxmış, yumru çənəli bir kişinin kameraya maraq və təəccüblə baxdığı təsvir olunub.",
  "Sənin gizli rolun LIBERALdır. Kartda səliqəli kostyum geyinmiş, fedora şlyapalı və səliqəli kəsilmiş bığlı bir kişi təsvir olunub.",
  "Sənin gizli rolun LIBERALdır. Kartda əlində çivaua saxlayan, gülünc dərəcədə böyük eynəkli yaşlı bir qadın təsvir olunub.",
  "Sənin gizli rolun LIBERALdır. Kartda iri günəş papağı və çiyninə qədər uzanan bob olan qadın gülümsəyir.",
];
const HitlerImages = [RoleHitler];
const HitlerImagesAltText = [
  "Sənin gizli rolun HITLERdir. Kartda kostyum və WW2 dövrünə aid alman hərbi papağı geyinmiş, kameraya sərt baxışlarla baxan bir timsah təsvir olunub.",
];
const FascistImages = [RoleFascist1, RoleFascist2, RoleFascist3];
const FascistImagesAltText = [
  "Sənin gizli rolun FAŞIST dir. Kartda hərbi medallarla örtülmüş bir kostyumdan çıxan ilan təsvir olunub.",
  "Sənin gizli rolun FAŞISTdir. Kartda alman hərbi papağında və dişləri açıq kostyumda olan iquana göstərilir.",
  "Sənin gizli rolun FAŞISTdir. Kartda alman hərbi papağında və dişləri açıq kostyumda olan iquana göstərilir.",
];

const LiberalText = [
  "Əgər lövhə liberal qanunlarla dolarsa və ya Hitler edam edilərsə, siz qalib gəlirsiniz.",
  "Lövhə faşist qanunlar ilə dolsa və ya 3 faşist qanunu seçildikdən sonra Hitler kansler seçilərsə məğlub olacaqsınız.",
  "Diqqətli olun və şübhəli hərəkətləri müşahidə edin. Hitleri aşkar etməyə çalışın və unutmayın ki, hər kəs yalan danışa bilər!",
];
const FascistText = [
  "Əgər lövhədə 3 faşist qanunu yerləşdirildikdən sonra Hitler kansler seçilərsə və ya lövhə tamamilə faşist qanunları ilə dolarsa, qalib gəlirsiniz.",
  "Lövhə liberal qanunlarla dolsa və ya Hitler edam edilərsə, uduzacaqsınız.",
  "Şübhələri Hitlerin üzərindən yayındırın və oyuna qarışıqlıq qatmağın yollarını axtarın.",
];
const HitlerText = [
  "Əgər lövhədə 3 faşist qanunu seçildikdən sonra kansler seçilsən və ya lövhə tamamilə faşist qanunlar ilə dolsa, qalib gəlirsiniz.",
  "Əgər lövhə liberal qanunlarla dolarsa və ya edam olunsan, uduzursunuz.",
  "Etibar qazanmağa çalış və sənə fürsətlər yaratmaları üçün digər faşistlərə etibar et.",
];

type RoleAlertProps = {
  role?: Role;
  name: string;
  gameState: GameState;
  onClick: () => void;
};

/**
 * CustomAlert content that shows the player's current role and a quick guide on how to play
 * the game.
 * Parameters:
 *      - {@code role} [String]: The role of the player. Should be either LIBERAL, FASCIST, or HITLER.
 *      - {@code roleID} [int]: The integer roleID of the player. This is used to show unique role cards.
 *          The roleID can range from [1, 6] for LIBERALS, [1, 3] for FASCISTS, and [1] for HITLER. If out of bounds,
 *          the value is set to 1 (default).
 *      - {@code onClick} [()]: The callback function for when confirmation button ("OKAY") is pressed.
 */
class RoleAlert extends Component<RoleAlertProps> {
  getRoleImageAndAlt(): { image: string; alt: string } {
    let images: string[];
    let imageAlts: string[];
    switch (this.props.role) {
      case Role.LIBERAL:
        images = LiberalImages;
        imageAlts = LiberalImagesAltText;
        break;
      case Role.FASCIST:
        images = FascistImages;
        imageAlts = FascistImagesAltText;
        break;
      default: // Hitler
        images = HitlerImages;
        imageAlts = HitlerImagesAltText;
    }
    const playerIndex = this.props.gameState.playerOrder.indexOf(
      this.props.name
    );
    const roleId = playerIndex % images.length;

    return {
      image: images[roleId],
      alt: imageAlts[roleId],
    };
  }

  render() {
    let roleText = HitlerText;
    if (this.props.role === Role.FASCIST) {
      roleText = FascistText;
    } else if (this.props.role === Role.LIBERAL) {
      roleText = LiberalText;
    }

    const { image, alt } = this.getRoleImageAndAlt();

    return (
      <div>
        <div>
          <h2 id="alert-header" className={"left-align"}>
            SƏN: {this.props.role} 
          </h2>
          <img id="role" src={image} alt={alt} />

          <p className={"left-align"}>{roleText[0]}</p>
          <p className={"left-align"}>{roleText[1]}</p>
          <p className="highlight left-align">{roleText[2]}</p>
        </div>

        <button onClick={this.props.onClick}>OKAY</button>
      </div>
    );
  }
}

export default RoleAlert;
