import React from 'react';
import IconLabelButton from './IconLabelButton';

import { facebook, twitter, mail, phone } from '../icons.js'


const Footer = () => (
  <div>
    <IconLabelButton icon={facebook} text="Facebook" link="https://facebook.com" />
    <IconLabelButton icon={twitter} text="Twitter" link="https://twitter.com" />
    <IconLabelButton icon={mail} text='Nous contacter' link="mailto:auxtauzins@wanadoo.fr" />
    <IconLabelButton icon={phone} text='05 58 98 60 22' link="tel:0558986022" />
    <div>
      547 RTE RAPHAEL LONNE 40380 MONTFORT EN CHALOSSE
    </div>
  </div>
)

export default Footer;
