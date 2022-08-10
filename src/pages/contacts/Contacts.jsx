import React from 'react'
import ContactUs from '../../components/form/Form';
import { css } from 'aphrodite/no-important';
import stylesContacts from './Styles.jsx';

const Contacts = () => {

    return(
        <div className={css(stylesContacts.container)}>
            <div className={css(stylesContacts.fadeIn)}>
                <h2 className={css(stylesContacts.HeaderStyle)}>Contacts</h2>

                <table className={css(stylesContacts.tableContacts)}>
                    <tbody className={css(stylesContacts.tableInner)}>
                    <tr className={css(stylesContacts.tableRow)}>
                        <td className={css(stylesContacts.tableCell)}>Telegram:</td>
                        <td className={css(stylesContacts.tableCell)}>Phone:</td>
                        <td className={css(stylesContacts.tableCell)}>Skype:</td>
                        <td className={css(stylesContacts.tableCell)}>LinkedIn:</td>
                        <td className={css(stylesContacts.tableCell)}>Gmail:</td>
                    </tr>
                    <tr className={css(stylesContacts.tableRow, stylesContacts.tableRowContacts)}>
                        <td className={css(stylesContacts.tableCell)}><a href='https://t.me/muddy_buddy' className={css(stylesContacts.tableCellContacts)}>Jean Cat</a></td>
                        <td className={css(stylesContacts.tableCell)}><a href='tel:+375295635835' className={css(stylesContacts.tableCellContacts)}>+375295635835</a></td>
                        <td className={css(stylesContacts.tableCell)}><a href='skype:375295635835' className={css(stylesContacts.tableCellContacts)}>Ivan Kotov</a></td>
                        <td className={css(stylesContacts.tableCell)}><a href='https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D0%BA%D0%BE%D1%82%D0%BE%D0%B2-7b1012238/' className={css(stylesContacts.tableCellContacts)}>Ivan Kotov</a></td>
                        <td className={css(stylesContacts.tableCell)}><a href='mailto:ivankotov12345@gmail.com' className={css(stylesContacts.tableCellContacts)}>ivankotov12345@gmail.com</a></td>
                    </tr>
                    </tbody>
                </table>

                <ContactUs />
            </div>
        </div>
    )
}

export default Contacts;