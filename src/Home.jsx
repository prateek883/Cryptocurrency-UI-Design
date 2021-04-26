import React, { useState } from 'react'
import { Col, Row, Dropdown, Container, Table } from 'react-bootstrap'

// Media Import
import logo from './img/HODLINFO.png';
import middleImg from './img/middle-section.png';
import BottomImg from './img/Bottom-Banner.png';
import wazirX from './img/wazirX.png';
import bitbns from './img/bitbns.png'
import giotus from './img/giotus.png';
import colodax from './img/colodax.png';
import zebpay from './img/zebpay.png';
import coindcx from './img/coindcx.png';
import TableRow from './TableRow';

/**
* @author
* @function Home
**/

const Home = (props) => {
    const [theme, setTheme] = useState('dark-theme');
    const [currencyName, setCurrencyName] = useState('BTC');

    const changeTheme = () => {
        if (theme === 'dark-theme') {
            setTheme('light-theme');
        } else {
            setTheme('dark-theme');
        }
    }

    return (
        <>
            <div className={theme}>
                <header className="header-div">
                    <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="header-logo-div">
                                <img src={logo} alt="HODLINFO" />
                                <p> Powered By <a href="https://finstreet.in" target="_blank" rel="noopener noreferrer"> Finstreet</a></p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="d-flex justify-content-center">
                            <div className="header-currency-div text-center">
                                <div className="header-btn-div">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" className="header-btn">
                                            INR
                                    </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/BTC-INR">INR</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="header-btn-div">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" className="header-btn">
                                            {currencyName}
                                    </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>BTC</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>ETH</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>USDT</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>XRP</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>TRX</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>DASH</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>ZEC</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>XEM</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>IOST</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>WIN</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>BTT</Dropdown.Item>
                                            <Dropdown.Item onSelect={(key,e) => setCurrencyName(e.target.innerText)}>WRX</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="header-btn-div">
                                    <a href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn" target="_blank" rel="noopener noreferrer" className="btn btn-secondary header-btn">Buy {currencyName} </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={12} xs={12} className="d-flex" style={{ justifyContent: "flex-end" }}>
                            <div className="right-header-div">
                                <div className="counter-bar">
                                </div>
                                <a className="telegram-btn" href="https://hodlinfo.com/connect/telegram" target="_blank" rel="noopener noreferrer"><i className="fa fa-telegram" aria-hidden="true"></i> Connect Telegram</a>
                                <div className="switch-div">
                                    <input type="checkbox" defaultChecked />
                                    <div className="slider" onClick={changeTheme}></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </header>
                <main className="content-area">
                    <Container fluid className="first-section-container">
                        <div className="first-section">
                            <div className="text-center">
                                <div className="first-section-heading text-color">0.18 %</div>
                                <div className="first-section-subheading">5 Mins</div>
                            </div>
                            <div className="text-center">
                                <div className="first-section-heading text-color">1.11 %</div>
                                <div className="first-section-subheading">1 Hour</div>
                            </div>
                            <div className="first-section-middle text-center">
                                <span className="first-section-subText">Best Price to Trade</span>
                                <div className="first-section-heading">₹ 43,07,762</div>
                                <div className="first-section-subText">Average BTC/INR net price including commission</div>
                            </div>
                            <div className="text-center">
                                <div className="first-section-heading text-color">4.64 %</div>
                                <div className="first-section-subheading">1 Day</div>
                            </div>
                            <div className="text-center">
                                <div className="first-section-heading text-color">8.44 %</div>
                                <div className="first-section-subheading">7 Days</div>
                            </div>
                        </div>
                        <a href="https://finstreet.in/" target="_blank" rel="noopener noreferrer">
                            <img src={middleImg} alt="Finstreet" />
                        </a>
                    </Container>
                    <div className="crypto-table">
                        <Table borderless>
                            <thead>
                                <tr>
                                    <th><h4 className="pointer">#</h4></th>
                                    <th><h4 className="pointer">Platform</h4></th>
                                    <th><h4 className="pointer">Last Traded Price</h4></th>
                                    <th><h4 className="pointer">Buy / Sell Price</h4></th>
                                    <th><h4 className="pointer">Difference</h4></th>
                                    <th><h4 className="pointer">Savings</h4></th>
                                </tr>
                            </thead>
                            <tbody>
                            <TableRow sNo="1" link="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn" imgSrc={wazirX} name="WazirX" LTP="46,39,852" BSP="₹ 46,57,881 / ₹ 46,57,882" fontColor="text-color" difference="0.63" savings="▲ ₹ 29,278" />
                            <TableRow sNo="2" link="https://bit.ly/2BJxccc" imgSrc={bitbns} name="Bitbns" LTP="45,89,187" BSP="₹ 45,75,000 / ₹ 45,89,468" fontColor="red-color" difference="-0.53" savings="▼ ₹ 24,503" />
                            <TableRow sNo="3" link="https://hodlinfo.com/BTC-INR" imgSrc={giotus} name="Giotus" LTP="46,15,000" BSP="₹ 46,10,010 / ₹ 46,83,998" fontColor="text-color" difference="0.03" savings="▲ ₹ 1,308" />
                            <TableRow sNo="4" link="https://hodlinfo.com/BTC-INR" imgSrc={colodax} name="Colodax" LTP="46,06,419" BSP="₹ 46,52,715 / ₹ 46,52,715" fontColor="red-color" difference="-0.16" savings="▼ ₹ 7,272" />
                            <TableRow sNo="5" link="https://hodlinfo.com/BTC-INR" imgSrc={zebpay} name="Zebpay" LTP="46,21,000" BSP="₹ 46,21,000 / ₹ 46,20,500" fontColor="text-color" difference="0.16" savings="▲ ₹ 7,308" />
                            <TableRow sNo="6" link="https://hodlinfo.com/BTC-INR" imgSrc={coindcx} name="CoinDCX" LTP="46,07,573" BSP="₹ 46,00,002 / ₹ 46,09,724" fontColor="red-color" difference="-0.13" savings="▼ ₹ 6,117" />
                            </tbody>
                        </Table>
                    </div>
                    <div className="bottom-banner-div">
                        <a href="https://ftx.com/#a=finstreet" target="_blank" rel="noopener noreferrer">
                            <img src={BottomImg} alt="Finstreet Banner" />
                        </a>
                    </div>
                </main>
                <footer className="footer-div">
                    <div className="footer-text">
                        Copyright © 2019
                    </div>
                    <div className="footer-text">
                        HodlInfo.com
                    </div>
                    <div className="footer-text">
                        Developed By <a href="https://www.quadbtech.com/" target="_blank" rel="noopener noreferrer">QuadBTech</a>
                    </div>
                    <div className="footer-text">
                        <a href="mailto:support@hodlinfo.com"> Support</a>
                    </div>
                </footer>
            </div>
        </>
    )
}


export default Home