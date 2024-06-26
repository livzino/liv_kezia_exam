import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer font-thin  ">
        <div className="row">
          <a href="#">
            <SocialIcon className="iconfooter hover:scale-150" alt="facebook logo" network="facebook" bgColor="transparent" fgColor="#DAEE68" url="/" />
          </a>
          <a href="#">
            <SocialIcon className="iconfooter hover:scale-150" alt="x logo" network="x" bgColor="transparent" fgColor="#DAEE68" url="/" />
          </a>
          <a href="#">
            <SocialIcon className="iconfooter hover:scale-150" alt="instagram logo" network="instagram" bgColor="transparent" fgColor="#DAEE68" url="/" />{" "}
          </a>
          <a href="#">
            <SocialIcon className="iconfooter hover:scale-150" alt="snapchat logo" network="snapchat" bgColor="transparent" fgColor="#DAEE68" url="/" />
          </a>
        </div>

        <div className="row">
          <ul>
            <li>
              <a className="linksfooter" href="#">
                CONTACT US
              </a>
            </li>
            <li>
              <a className="linksfooter" href="#">
                ADRESS
              </a>
            </li>
            <li>
              <a className="linksfooter" href="#">
                CONTACT
              </a>
            </li>
            <li>
              <a className="linksfooter" href="#">
                SCHEDULE
              </a>
            </li>
          </ul>
        </div>

        <div className="row">CURLYFRIES Copyright © 2024 CurlyFries - All rights reserved || Designed By: Kezia and Liv</div>
      </div>
    </footer>
  );
}
