import "./nav.scss"
import nav from "../../content/nav.json"
import burgerIcon from "../../assets/header_assets/burger_icon.svg"
import snacksIcon from "../../assets/header_assets/snacks_icon.svg"
import hotdogIcon from "../../assets/header_assets/hotdog_icon.svg"
import comboIcon from "../../assets/header_assets/combo_icon.svg"
import burritoIcon from "../../assets/header_assets/burrito_icon.svg"
import pizzaIcon from "../../assets/header_assets/pizza_icon.svg"
import noodlesIcon from "../../assets/header_assets/noodles_icon.svg"
import desertsIcon from "../../assets/header_assets/deserts_icon.svg"
import sauceIcon from "../../assets/header_assets/sauce_icon.svg"

export default function Nav({stateNavActive}) {
    const objIcon = {
        burgerIcon,
        snacksIcon,
        hotdogIcon,
        comboIcon,
        burritoIcon,
        pizzaIcon,
        noodlesIcon,
        desertsIcon,
        sauceIcon
    }

    const {navActive, setNavActive} = stateNavActive;
    return (
        <>
            {
                nav.map(item => (
                    <div className={`nav_item ${navActive.name === item.name ? 'active' : 'f'}`} key={item.id} onClick={() => setNavActive(item)}>
                        <img src={objIcon[item.icon]} alt={item.name}/>
                        <span>{item.name}</span>
                    </div>
                ))
            }
        </>
    )
}