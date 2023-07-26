import {BiLogoTypescript,BiLogoJavascript, BiLogoReact,BiLogoTailwindCss,BiLogoSass} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiTsnode,SiNestjs} from 'react-icons/si'
import {IoLogoNodejs} from  'react-icons/io'
import {TbBrandMongodb} from 'react-icons/tb'
import './styles.css'
const Stack=()=>{


    return(
        <>
        <section id="front-end">

<BiLogoTypescript color='#08C3E6'/>
<BiLogoJavascript color='yellow'/>
<BiLogoReact color='#1366EB'/>
<TbBrandNextjs color='#f1f1f1'/>
<BiLogoTailwindCss color='#18AEF0'/>
<BiLogoSass color='#E641BB'/>
        </section>

        <section id="back-end">

<SiTsnode color='#0F96F9'/>
<SiNestjs color='#FA1E4E'/>
<IoLogoNodejs color='#13C25C'/>
<TbBrandMongodb color='#11A850'/>
        </section>
        </>
    )
}
export default Stack