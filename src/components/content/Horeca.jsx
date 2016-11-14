import React from 'react'
import _ from 'underscore';

import '../../styles/Horeca.less';
import '../../styles/FirstBlock.less';

import '../../styles/jquery.fullPage.css';
import '../../styles/blueimp-gallery.min.css';

//noinspection JSUnresolvedVariable
import languages from '../../languages.json';

const IMAGES_DATA = [
    {
        url: require('../../img/horeca/pm_coffeeme.jpg'),
        title: 'Чашка фарфоровая декорированная \n Изготовлено для Coffee Life'
    },{
        url: require('../../img/horeca/pm_flavours_01.jpg'),
        title: 'Меню ресторана FLAVOURS \n Изготовлено для Four Points by Sheraton Запорожье'
    },{
        url: require('../../img/horeca/pm_grilled_01.jpg'),
        title: 'Меню ресторана THE GRILLED \n Изготовлено для Redisson SAS Resort Алушта'
    },{
        url: require('../../img/horeca/pm_jacobs_01.jpg'),
        title: 'Набор фарфоровой посуды \n Изготовлен для ТМ JACOBS'
    },{
        url: require('../../img/horeca/pm_kaa_01.jpg'),
        title: 'Набор фарфоровой посуды \n Изготовлен для сети L`Kafa Cafe"'
    },{
        url: require('../../img/horeca/pm_pinta_01.jpg'),
        title: 'Футболка-поло и декорированные пивные бокалы \n Изготовлено для Pinta Trattoria and Pub'
    },{
        url: require('../../img/horeca/pm_pinta_05.jpg'),
        title: 'Набор фарфоровой посуды \n Изготовлено для Pinta Trattoria and Pub'
    },{
        url: require('../../img/horeca/pm_r_l.jpg'),
        title: 'Меню ресторана RIVER LOUNGE \n Изготовлено для  Four Points by Sheraton Запорожье'
    },{
        url: require('../../img/horeca/pm_supko_01.jpg'),
        title: 'Набор декорированной столовой фарфоровой посуды \n Изготовлен для ресторана Суп & Ко'
    },{
        url: require('../../img/horeca/pm_001.jpg'),
        title: 'Бирдекель ( нем. Bierdeckel) - подставка под пивную кружку'
    },{
        url: require('../../img/horeca/pm_002.jpg'),
        title: 'Переноска для кофе \n Изготовлено для компании Promo-Cup'
    },{
        url: require('../../img/horeca/pm_003.jpg'),
        title: 'Холдер для кофе \n Изготовлено для компании Promo-Cup'
    },{
        url: require('../../img/horeca/pm_006.jpg'),
        title: 'Дорхенгер (Door Hanger) - Табличка на дверь'
    },{
        url: require('../../img/horeca/pm_007.jpg'),
        title: 'Коробка для пиццы \n Изготовлено для Pinta Trattoria and Pub'
    }
];

const Horeca = React.createClass({
    propTypes: {
        lang: React.PropTypes.string,
        cont: React.PropTypes.func
    },

    html(sectionid, contant="body" ) {
        let home_translate = languages[this.props.lang].home || {};
        return {__html: home_translate[sectionid] ? home_translate[sectionid][contant] : 'Такого элемента нет в массиве!'}
    },

    sectionLink(sectionlinkid) {
        $(this.refs.Horeca).fullpage.moveTo(sectionlinkid);
    },

    componentDidMount() {
        let htmlElem = document.documentElement;

        htmlElem.classList.contains('fp-enabled') ? $(this.refs.Horeca).fullpage.destroy('all'): {};
        htmlElem.className = 'Horeca';

        $(this.refs.Horeca).fullpage({
            css3: true,
            navigation: true,
            scrollOverflow: true,
            scrollingSpeed: 1000,
        });
    },

    render() {
        const cont = languages[this.props.lang].home || {};
        return (
            <div>
                <ul className="galleryHoreca">
                    <a onClick={e => blueimp.Gallery($(this.refs.linksImg).find('a'))}>GALLERY</a>
                </ul>
                <div ref='Horeca'>
                    <div className="section active"
                         id="section0"
                         style={{
                             background: 'url('+ require('../../img/backgrounds/h/h_001.jpg') + ') no-repeat center',
                             backgroundSize: 'cover'
                         }}>

                        <div className="container-col">
                            <div className="col-1">
                                <img className="logo" src={require('../../img/backgrounds/logo_main.svg')}/>
                            </div>
                            <div className="col-2">
                                <b className="title">{cont.section0.title}</b><br/>
                                <p className="textSection0" dangerouslySetInnerHTML={this.html("section0")}/>
                            </div>
                        </div>
                    </div>
                    <div className="section"
                         id="section1"
                         style={{
                             background: 'url('+ require('../../img/backgrounds/h/h_002.jpg') + ') no-repeat center',
                             backgroundSize: 'cover'
                         }}>

                        <div className="container-col">
                            <div className="col-1">
                                <p className="textOlso" dangerouslySetInnerHTML={this.html("section1")}/>
                            </div>
                        </div>
                    </div>
                    <div className="section"
                         id="section2"
                         style={{
                             background: 'url('+ require('../../img/backgrounds/h/h_003.jpg') + ') no-repeat center',
                             backgroundSize: 'cover'
                         }}>

                        <div className="container-col">
                            <div className="col-1">
                                <p className="textOlso" dangerouslySetInnerHTML={this.html("section2")}/>
                            </div>
                        </div>
                    </div>
                    <div className="section"
                         id="section3"
                         style={{
                             background: 'url('+ require('../../img/backgrounds/h/h_004.jpg') + ') no-repeat center',
                             backgroundSize: 'cover'
                         }}>

                        <div className="container-col">
                            <div className="col-1">
                                <p className="textOlso" dangerouslySetInnerHTML={this.html("section3")}/>
                            </div>
                        </div>
                    </div>
                    <div className="section"
                         id="section4"
                         style={{
                             background: 'url('+ require('../../img/backgrounds/promo_works_master.jpg') + ') no-repeat center',
                             backgroundSize: 'cover'
                         }}>

                        <div className="container-col">
                            <div className="col-1">
                                <img className="logo" src={require('../../img/backgrounds/logofoot.svg')}/>
                            </div>
                            <div className="col-1 left">
                                <p dangerouslySetInnerHTML={this.html("section4", "title")}/>
                            </div>
                            <div className="col-3">
                                <p dangerouslySetInnerHTML={this.html("section4")}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="linksImg">
                    {_.map(IMAGES_DATA, (value, key) =>
                        <a key={key}
                           href={value.url}
                           title={value.title}
                        />)
                    }
                </div>

                <div id="blueimp-gallery" className='blueimp-gallery blueimp-gallery-controls'>
                    <div className='slides'></div>
                    <pre className='title'
                        style={{
                            backgroundColor: "rgba(0,0,0,0.5)",
                            border: "0",
                            color: "rgba(255,255,255,0.90)",
                            fontSize: "80%",
                            fontFamily: 'FreeSet Cyrillic, arial',
                            lineHeight: "2em"
                        }}/>
                    <p className="description"/>
                    <a className='prev'>‹</a>
                    <a className='next'>›</a>
                    <a className='close'>×</a>
                    <a className='play-pause'/>
                    <ol className='indicator'/>
                </div>
            </div>
        )
    }
});

export default Horeca;