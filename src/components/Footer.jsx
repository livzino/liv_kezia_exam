import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer>
      <div class="footer">
        <div class="row">
          <a href="#">
            <SocialIcon className="iconfooter hover:hover:scale-150" network="facebook" bgColor="transparent" fgColor="#DAEE68" url="/" />
          </a>
          <a href="#">
            <SocialIcon className="iconfooter hover:hover:scale-150" network="x" bgColor="transparent" fgColor="#DAEE68" url="/" />
          </a>
          <a href="#">
            <SocialIcon className="iconfooter hover:hover:scale-150" network="instagram" bgColor="transparent" fgColor="#DAEE68" url="/" />{" "}
          </a>
          <a href="#">
            <SocialIcon className="iconfooter hover:hover:scale-150" network="snapchat" bgColor="transparent" fgColor="#DAEE68" url="/" />
          </a>
        </div>

        <div class="row">
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

        <div class="row">INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh</div>
      </div>
    </footer>
  );
}
