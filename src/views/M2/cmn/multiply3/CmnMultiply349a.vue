<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>49.1.</h1></div>
                        <div class="chapter_title ltr"><h1>《主仆：宋尚节》</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <h2>宋尚节 (1901 ~ 1944)</h2>

<p class="forward">二十世纪中国教会著名奋兴布道家。</p>

<p class="forward">宋尚节于1901年9月27日出生于福建兴化府莆田县凤迹村的一个牧师之家。由于基督教于十九世纪中叶即传入莆田，宋尚节之父宋学连成为最早接受基督信仰的信徒，并于16岁时得入福州神道学校接受神学教育，毕业后回家乡传道，此后担任美以美会的牧师达44年之久。宋学连25岁时娶亲，新娘为其父辈指腹为婚所定，原来自于一个笃信佛教的家庭，婚后在宋学连的引导下接受福音， 受洗归入基督的名下。夫妇二人共养育孩子十一人，七男四女，但其中一兄一妹早年夭折。宋尚节排行第六，乳名主恩。宋学连是位信仰虔诚，为人正直的牧师，虽作为一个传道人，收入菲薄，但与妻子省吃俭用，除日常生活所需外，结余下来的钱都用来买书，久而久之，家中藏书颇丰，故宋尚节自幼即随父读书成习。</p>

<p class="forward">在信仰方面，宋尚节也受父亲影响极大。忆及此，宋尚节曾说：&ldquo;感谢主赐给我这位爱我教我喂我灵粮的父亲，不然怎有今日之我？......我虽是黑暗，却有光明的父亲照耀在我足前&rdquo;。</p>

<p class="forward">宋尚节六岁时，全家由凤迹村迁往兴化居住，父亲宋老牧师出任兴化福音书院的副院长。每逢主日，小尚节都参加教会的主日学，信仰的种子由此播撒在他的心田。1909年，兴化教会举办大型奋兴布道会，盛况空前，给宋尚节留下深刻的印象。在其日后布道生涯中，他常常提起那次布道大会，并以之为自己的动力和楷模。这次大会给宋学连牧师主持的美以美会兴化教堂带来了大复兴，历数年而不衰。会众由数百人一下子猛增到二、三千人，以致教堂容纳不下而不得不每主日分三次进行崇拜。宋尚节年少时就已充任临时执事的角色 ，为父亲分担些教会事务。 1913年，宋尚节进入美以美会所办中学读书，在学期间，他也经常跟随父亲到乡村去布道或售卖圣书和福音单张。有时父亲因生病或外出时，他还要代父亲主领聚会或讲道，颇受信徒欢迎，因此博得&ldquo;小牧师&rdquo;和&ldquo;小圣&rdquo;之称。</p>

<p class="forward">由于父亲收入有限，子女多，故生活拮据，以致宋尚节读中学时， 仍身着短衫，赤足上学。但他聪颖勤奋，学习成绩一直名列前茅。四年后，他以第一名的成绩高中毕业。为能够体面地上台领取文凭和奖品，他父母才节衣缩食，为他做了件长衫，这也是他生平第一次穿上长衫。</p>

<p class="forward">高中毕业后，宋尚节原本希望升入在南京的教会大学----金陵大学 就读，但因政局动荡，学潮不断，难以潜心于学问，于是萌发去国外读书的念头。但却因经济上的缘故而遭到父亲的反对。后经美籍传教士鼎力相助，为其申请到美国俄亥俄州卫斯理大学及其免学费的奖学金；又得父亲朋友资助旅费，宋尚节终于如愿以偿，于1919年2月经上海启航，赴美留学。</p>

<p class="forward">宋尚节在俄亥俄州卫斯理大学主修化学，一边刻苦攻读，一边打工赚取学费，十分勤奋。1923年以优异成绩取得学士学位。接着，他进入俄亥俄州立大学继续攻读硕士和博士学位，终于在1926年获得博士学位。</p>

<p class="forward">宋尚节的学识与干才受到其所在学校一位教授的赏识，有意推荐他赴德国继续深造；同时中国国内的一所医科大学亦欲聘请他为教授。正当他为前途面临选择之时，圣经中的一句话：&ldquo;人若赚得全世界，赔上自己的生命，又有什么益处呢?&rdquo; 清楚地进入他的内心。次日，又有一位牧师来访，见面后就对他说：&ldquo;你并不像一个科学家，你倒像一个传道人&rdquo;，并勉励他去读神学。经过一番思想挣扎后，他打消了赴德国求学和回国任教的念头，而决定去读神学。在那位牧师的帮助下，宋尚节于1926年9月进入纽约协和神学院学习。</p>

<p class="forward">入学后不久，他即发现该神学院所传授之神学课程与其信仰格格不入，这使他焦虑不安。1927年2月10日夜晚，宋尚节经历了属灵生命的更新，在其《我的见证》一书中，他称&ldquo;那晚上是我生命中最值得纪念的我的灵性的生日&rdquo;。自那日起，宋尚节的性情发生很大的变化，逢人就传福音，见证神在他身上所行之奇事。他时而高歌，时而低吟，时而欢乐感恩，时而流泪感叹。这些行为被人看为怪异，学校当局以为他患了精神病，遂强行将他送进疯人院。他共计在疯人院里度过193天，这段日子对他的个性与脾气确实是个极大的试炼。但也就在这段特殊的日子里，他把圣经读过四十遍，获益良深。后经好友力保，以及中国领馆人员的交涉，他才得释放。获释后，他先在辛辛那提小住一个月，然后经西雅图搭船回国。途中，他做出惊世骇俗之举：将其所拥有的学位证书及荣誉奖章等，皆抛入海中，以示其决意效法使徒保罗，轻看世界名利地位，献身传道的决心。</p>

<p class="forward">1927年11月，宋尚节抵达上海，旋即返抵故乡兴化。初始时，他一面在教会学校教书，一面传道。 1928 年，他辞去教学工作，开始全职传道生涯。同年，他奉父母之命，媒妁之言，与余锦华女士结婚。 因其长年奔波于各地传道，故婚后二人聚少离多。</p>

<p class="forward">在1928-30年间，宋尚节外出传道的脚踪由近及远，先是在附近沿海一带的城镇乡村，再扩展至厦门、漳州和泉州等地，足迹遍及闽南、闽北及近海岛屿，声名远播。 1930年冬，宋尚节被教会差往北方考察平民教育运动。他先赴湖州参加华东基督化家庭大会，期间，经广学会西籍女传教士梅立德夫人（Mrs.F. R. Milican ）的发现与推荐，他受邀在大会上演讲。此后一发不可收拾，湖州各教会、学校和医院等纷至沓来，邀他前去布道，由此打开了宋尚节远赴各地巡回布道之门。湖州之后，宋尚节继续北上，先后到杭州、上海、南京、北京、保定等地访问，最后到达河北定县，拜访了著名平民教育运动领袖晏阳初。虽然他对晏阳初的工 作 十分敬佩，但他却认为此等运动并非乡村教会之必需。归途中经上海时，宋尚节又应邀到各教会讲道，他还特意拜访了石美玉和胡遵理所创立的伯特利教会。此时的宋尚节在讲道内容上，已不再是风行一时的社会福音，而是紧紧扣住&quot;十字架&quot;、 &quot;重生&quot;和&quot;耶稣宝血&quot; 等基本要道。宋尚节的布道恩赐与风格深得伯特利布道团的赞赏，彼此甚为相契相通，这些为他们日后的同工合作奠定了基础。</p>

<p class="forward">宋尚节回兴化后不久，即应邀到江西南昌、九江等地主领奋兴会。 自那时起，他的讲道锋芒所向直斥人的痛处&mdash;&mdash;罪。凡前来听他布道之人，无论教牧人员，还是普通会众，无不为其所感，认罪悔改者不计其数。宋尚节的声名也随之远播。</p>

<p class="forward">1931年5月，宋尚节应邀参加伯特利布道团。该团共由五人组成，其他四位是计志文、李道荣、林景康和聂子英，计志文任团长。他们巡游全国各地，举行奋兴布道会。时常在一天当中有三、四场布道或查经聚会，他们按着各自的恩赐，分工合作，配搭事奉，通常由计志文和宋尚节担任讲员，主领聚会，其他三人带领唱诗或充当翻译。在差不多三年时间里，他们的足迹遍及东北三省、西南各省、山东、河南、山西、内蒙古、上海、福建、广东、广西、湖南、湖北、 河北、北京、天津等十三个省区，一百多个城镇，行程约五万多哩， 带领十万人归主。</p>

<p class="forward">1934年，宋尚节离开伯特利布道团后，作为一个独立的自由布道家，先后到江苏、浙江、安徽、山东、河北、广东和福建等地布道，所到之处，点燃属灵奋兴之火，归信基督者甚众，其影响远播海内外。</p>

<p class="forward">从1935--1940年期间，宋尚节马不停蹄，海内海外四处奔波布道。 1935年，应南洋华侨教会之邀请，前往菲律宾、新加坡、马六甲、槟榔屿、和苏门答腊等地主领奋兴聚会。1936年，他应邀赴台湾，在台北、台中和台南等地布道。在他人生最后几年里，他跑遍中国的长城内外，大江南北，先后到厦门、汕头、兴化、南京、太原、 温州、西安、信阳和上海等地；他的足迹也踏遍东南亚，如缅甸、马来半岛、沙捞越、越南、泰国和印度尼西亚诸国，向各地华人华侨布道，为各地教会带来极大的奋兴，可谓果实累累，且效果长存，经久不衰。 至今在老一辈中间，尚有多人声称他们是宋尚节当年所结的果子；甚至许多老牧师和教会领袖是因当年宋尚节的奋兴激励，奉献自己的一生给基督。</p>

<p class="forward">宋尚节被人称为&ldquo;一根蜡烛两头点&rdquo;的人。他本来身体就不太好，工作、布道起来又很拼命，从不顾惜自己，久而久之他的精神和体力严重透支。 1940年，他终于旧病复发，卧床不起，终于1944年8月17日在北京德国医院安息。王明道先生为他主持了追思礼拜和葬礼，赞其为&ldquo;诚实正直，毫无虚伪&rdquo;的一代属灵伟人。逝世后，他被安葬在北京香山。</p>

<p class="forward">《华人基督教史人物辞典》</p>

<p class="forward">http://www.bdcconline.net/zh-hans/stories/by-person/s/song-shangjie.php</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->