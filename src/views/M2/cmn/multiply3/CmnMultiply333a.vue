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
                        <div class="chapter_number ltr"><h1>33.1.</h1></div>
                        <div class="chapter_title ltr"><h1>《宣教士：古约翰》</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <h2>（Jonathan Goforth， 1859-1936）</h2>

<p>著名加拿大长老会宣教士、奋兴布道家，先后在中国的山东、河南、河北和东北宣教长达48年之久，曾为中国东北教会带来福音大复兴。</p>

<p>古约翰1859年2月10日出生在加拿大安大略省(Ontario)西部的一个小镇，父母都是移民，分别来自英国约克郡和北爱尔兰，以务农为生，拓荒垦殖为业。夫妻共育有十个男孩和一个女孩，古约翰排行第七。由于家境贫困，加上人口多，生活倍加艰苦。母亲珍妮敬虔爱主，经常教导儿女阅读圣经，并且每日一同祷告，向神认罪，祈求赦免。古约翰缅怀童年往事时说：&ldquo;母亲惯常要我诵读诗篇给她听，所以由五岁开始就会大声朗诵，不期然养成背诵圣经的习惯，使我毕生受用，终身蒙福&rdquo;。18岁那年，父亲开始让他管理古家的第二座农场，结果他把每件事情都处理得井井有条，令父亲大感欣慰。不过直到这个时候，古约翰对属灵的事情并不很在意，一心只想将来能够从政，因为他认为&ldquo;农 村需要政治家&rdquo;。他经常在一天工作结束后，放弃休闲的机会，走路去参加几哩外的政治性集会，或者独自一人跑到屋后的沼泽地去训练演说的技巧。</p>

<ul>
	<li class="nobreak-final-final">然而有一天，当他参加主日崇拜的时候，圣灵感动了他，使他愿意放弃自己设计的人生蓝图，而将生命的主权交给主来管理。后来他见证说：&ldquo;我18岁时重生得救，虽然简单，却是彻底的。从那日开始，正如保罗所说：&lsquo;我已经与基督同钉十字架。现在活着的不再是我，乃是基督在我里面活着&rdquo; （<span class="popup-link" @click = "popUp('pop1')"> 加2:20</span>)。

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>我已经与基督同钉十字架，现在活着的不再是我，乃是基督在我里面活着。并且我如今在肉身活着，是因信神的儿子而活，他是爱我，为我舍己。</p>
	<!-- end bible --></div>
	上）他立下决心委身于神，打算终生传道。此时，由加拿大长老会差派到台湾宣教的马偕牧师（Rev. George Leslie Mackay），刚好回来休假。他到处演讲， 呼吁年青人跟随他到台湾去，协助他开荒布道。此事令古约翰深受感动，遂产生前往海外宣教的负担。</li>
</ul>

<p>高中毕业后，古约翰进入多伦多长老会的诺克斯神学院（Knox Collage）攻读，把自己的时间完全摆放在研读神话语里面，冀望有牢固的基础，装备妥善，为主所用。他积极的在同学中挑旺海外宣道的热忱，甚至还节衣缩时，将省下来的钱大量加印戴德生着的《中国属灵需要与要求》(China&#39;s Spiritual Need and Claims) 与其它有关中国的书册，分送给别人。为了争取传福音的经验，他不断向多伦多附近的贫民窟逐家逐户布道。据古约翰自己统计，他一个夏天就先后探访过960户人家；曾在一个下午，带领三个人悔改信主。此外，他亦找寻机会到监狱向囚犯宣讲福音，劝导他们在基督里成为新造的人。凡此种种，使古约翰对 宣教工作充满兴趣，并且信心十足。</p>

<p>1887年6月，加拿大长老会终于作出决定，差派古约翰联同史密斯医生（Dr.James F. Smith）前往中国宣教。同年10月，古约翰与邂逅多年，从英国伦敦移民过来的罗莎琳德&middot;贝尔-史密斯（Rosalind Bell - Smith）结为夫妻。她虽然没有读过神学，却具备宣教的激情和热忱，可谓志趣相投，能够互励互勉，彼此扶持，一同肩负起到海外宣教的重任。 1888年初，古约翰夫妇经历了长途跋涉，绕行大半个地球，辗转抵达中国山东省的烟台，成为他们初到的立足点。古约翰打破中文的语言障碍后，遂前往河南省事奉。古约翰在中国的第一个固定工场位 于河南省的北端，这个地区是中国古代文化的一个中心，尤其是被他们选为基地的彰德府(今安阳)，更是商代后期长久建都之地。然而这里也是一个反教气氛相当浓厚的地区，不易获得居民的信任与友谊。当英国宣教士戴德生（Hudson Tayler）获悉古约翰有意以此为工场时，特地写了一封信给他，叮咛说：&ldquo;弟兄啊，如果你想进入河南省传福音，一定要以膝代步啊（Go forward on your knees)！&rdquo; 从此&ldquo;以膝代步&rdquo; 这句话就成为古约翰与豫北同工们的座右铭，无论大小事情， 除非先有充分的祷告，绝不敢冒然采取行动。 古约翰起初经常受到当地居民的敌视、叫骂、追逐、被投掷泥块、粪便，甚至遭受石头袭击亦是惯常之事。面对此等环境，古约翰却毫不胆怯，不以此为羞辱，仍抱持大无畏精神，以最忍耐心态戮力以赴，再接再厉冒死前往讲道。经过长时间试炼，居民感念其诚，态度逐渐有所转变，讲道时为他提供椅子，还带来安放圣经的茶几，并以茶水招待。由于天气酷热，他们的第一个小孩死于急性痢疾，这对他们夫妇实在是很大的打击！终其一生宣教生涯，他们十一个孩子中有四个在中国病死。但古约翰仍矢志不移的爱中国人的灵魂，他说：&ldquo;神把我心爱的女儿收回去，当然有他的美意，我们祈祷说，因着这件事使我们更加配得传福音给那些千千万万走向死亡深渊的人，告诉他们主耶稣已经战胜了死亡的权势！&rdquo;</p>

<p>1900年夏天，正当河南省布道工作满有成效之际，一次史无前例的巨大灾劫，震撼了在华西方宣教士。义和团之乱，挑起国人仇外情绪，到处追杀洋人泄忿，对远道而来舍己为人、满有爱心的西教士亦不放过。古约翰全家在风声鹤唳的恐怖气氛下，在四围喊杀的凄厉声浪中逃亡，经历了长达20多天生命朝不保夕的恐怖日子，托庇神的护佑，方才虎口逃生。虽然古约翰差点丧命，但他毫不怨恨中国人。义和团之乱后，古约翰重回豫北的宣教工场。此番他决定深入到更边远的地区，去建立各地的教会。他越过漳河到河北的武安、彭城、邯郸一带传福音，在河北省南部布道时，有时一天有一千人听道，在邯郸更是受到知县的热情款待。古约翰的生活很有规律，每到一处，例必在每日早晨六时起床，先用十分钟学习十二个汉字，然后读圣经。七时用早餐，八时与布道员讲解圣经，讲道内容从来不重复。晚上则在该地租用的店铺里布道。这时侯，他开始留心教会复兴的史迹，不断从圣经与属灵伟人的传记中去寻找复兴的线索。在许多复兴布道家之中，尤以十九世纪上半期的芬尼(Charles Finney) 有关复兴的信息，对他的影响最大。</p>

<p>1907年，古约翰有机会由水路去了一趟朝鲜，没想到正遇上朝鲜教会的一次大复兴。他在那里停留了三个星期后，改由陆路回来，顺道在东北的一些教会中报导此行的见闻。第二年的春天，他应邀再度前往东北领会，终于带来了东北教会的一次大复兴。那时他在东北各教会所传讲的信息，大致环绕着同一个主题&mdash;&mdash;&ldquo;不是倚靠势力，不是倚靠才能，乃是倚靠我的灵，方能成事&rdquo;(亚 4:6)。所以在他晚年时，他儿子根据他的口述将东北大复兴的经过整理成书，就定书名为《靠着我的灵》(By My Spirit)。此外他在东北大复兴中的同工韦雅各(James Webster)处也留下了一份记录(The Revival in Manchuria)，二者相互印证，读来更觉真实可贵。</p>

<p>据统计，这次的复兴使东北教会的受洗人数，从1907年的一千五百人骤增为1908年的三千五百人。在空间上，它也超出了东北而蔓延到中国的其它地区；在时间 上，继 1908 年的高潮之后，仍然余波荡漾，有些地区甚至直到辛亥革 命爆发(1911年)才告平静。为了表彰古约翰的成就，他的母校诺克斯 神学院授予他神学名誉博士学位。1919年和1922年，有&ldquo;基督将军&rdquo;称号的冯玉祥将军，由于仰慕古约翰之名，特别邀请他到军中传扬福音，他欣然携师母同往。在那里，古约翰每天两次向1,000多名军人讲道，其中多半属长官级。师母罗莎琳德亦与官长太太们聚会，劝她们认罪悔改，信靠耶稣。古约翰在最后一天替960位军人施洗，为4,000多名官长和士兵主持圣餐 。</p>

<p>1926 年春天，从68岁开始，古约翰转入了在中国的第二个固定工场，就是他曾经以复兴布道家的身份在此出现的东北。他选定四平街为基地，不顾自己逐渐朽坏的身体、瘟疫的流行与日本侵略所带来的动乱，坚持在那里殷勤工作了八年之久。古约翰的宣教工场伸展到吉林，他在长春等地设立宣教站，并向辽宁省推进，也曾渡过鸭绿江，深入朝鲜传讲福音。由于四处奔波，体力消耗殆尽，加上年事已高，健康亮起红灯，亟需易地休养。</p>

<p>1930 年初，他回到加拿大，发现右眼视网膜脱落，虽施行手术仍无法医治，引致右眼完全失明。在四个月住院休养期间，他口述了在中国宣教的回忆录，由护士盖小姐笔录，再交给古师母整理成书，取名《在中国的神迹》（Miracle Lives of China）。1933 年，古约翰仅存的左眼，亦不幸完全失明。然而这些都不曾 阻挠他对主的忠心与事奉，仍旧瞎着眼睛在台上讲道，令听众大受感动，多人归信基督。直到1935年，古约翰终于因病退休回国，离开时，四平街的火车站上人山人海，挤满了伤心流泪的中国信徒。</p>

<p>在中国长达48年的宣教生涯中，古约翰是一个奋斗不息、不知疲倦的宣教士，一生中&ldquo;不让自己虚度一周而没有为神工作&rdquo;。回国时，他已76岁高龄，但回到国内仍没有喘息的机会，往往一周要讲道六至八次，他不断呼吁北美各地的信徒，要关心在中国千千万万失丧的灵魂。1936年10月7日，古约翰在加拿大安大略省怀俄明市的圣安得烈教堂讲完他人生最后一场道，他说，他唯一心满意足的，就是作耶稣基督的仆人。当天晚上他在熟睡中被主接去，在世寄居77载。 他确实是一位忠心事主，至死不渝的神仆。人们称赞他&ldquo;有着敏锐的头脑、不屈不挠的勇气和执着的追求；他充满热情，勤勉而不知疲倦；他忠实于正义，陶醉于上帝，完全信服于和奉献于上帝&rdquo;。</p>

<p>《华人基督教史人物辞典》<br />
http://www.bdcconline.net/zh-hans/stories/by-person/g/gu-yuehan.php</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->