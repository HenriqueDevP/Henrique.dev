import {FaGithubAlt} from 'react-icons/fa'
    import {FaLinkedinIn} from 'react-icons/fa'
    import {GrInstagram} from 'react-icons/gr'
    import './styles.css'
const Header=()=>{

    return(
        <header>
        <nav>
            <a>
                Github
<FaGithubAlt/>
            </a>

            <a>
Linkedin
                <FaLinkedinIn/>
            </a>
<a>
    Instagram
    <GrInstagram/>
</a>

        </nav>

        </header>
    )
}

export default Header