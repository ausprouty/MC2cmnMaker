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
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>圣灵降临显大能——预备工人</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<h2 class="back">敬拜赞美</h2>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督使命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒1:26</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">26&nbsp;</sup>于是众人为他们摇签，摇出<u class="person underline">马提亚</u>来，他就和十一个使徒同列。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">我们不可只呆站空等主耶稣，当有实际的行动传扬福音，做主所交代的事（<span class="popup-link" @click = "popUp('pop2')"> 可16:19-20</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>主耶稣和他们说完了话，后来被接到天上，坐在神的右边。<sup class="versenum">20&nbsp;</sup>门徒出去，到处宣传福音。主和他们同工，用神迹随着证实所传的道。阿门。</p>
	<!-- end bible --></div>
	我们因着相信主耶稣必定再来，有圣灵所赐的能力，就勤做主工，存敬畏的心，耐心等候主的再临，知道为主所做的工必不徒然（<span class="popup-link" @click = "popUp('pop3')"> 太24:30-31</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">30&nbsp;</sup>那时，人子的兆头要显在天上，地上的万族都要哀哭。他们要看见人子有能力、有大荣耀驾着天上的云降临。<sup class="versenum">31&nbsp;</sup>他要差遣使者，用号筒的大声，将他的选民从四方，从天这边到天那边，都招聚了来。</p>
	<!-- end bible --></div>
	深愿在那一日我们站在上帝与耶稣基督荣耀的宝座面前得着称赞和奖赏，并从主耶稣口中听到我们是那&ldquo;忠心又良善的仆人！&rdquo;（<span class="popup-link" @click = "popUp('pop4')"> 太25:21-23</span>）

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>主人说：&lsquo;好，你这又良善又忠心的仆人，你在不多的事上有忠心，我要把许多事派你管理。可以进来享受你主人的快乐！&rsquo;<sup class="versenum">22&nbsp;</sup>那领二千的也来，说：&lsquo;主啊，你交给我二千银子，请看，我又赚了二千。&rsquo;<sup class="versenum">23&nbsp;</sup>主人说：&lsquo;好，你这又良善又忠心的仆人，你在不多的事上有忠心，我要把许多事派你管理。可以进来享受你主人的快乐！&rsquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">门徒等候多时的日子终于来到了。神按照祂自己指定的时间表成就祂的应许。神用天上的响声召集在耶路撒冷的众人都来聚集。这些门徒都聚集在一处，同心合意恒切祷告。神把这些有心人从天下各国召来，聚集在耶路撒冷，要让他们听见福音，认识基督，成为门徒，再回到天下各国去，作主见证。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒2:1-13》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒2:1-13</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>五旬节到了，门徒都聚集在一处。 <sup>2</sup>忽然，从天上有响声下来，好像一阵大风吹过，充满了他们所坐的屋子；<sup>3</sup>又有舌头如火焰显现出来，分开落在他们各人头上。<sup>4</sup>他们就都被圣灵充满，按著圣灵所赐的口才说起别国的话来。</p>

<p><sup>5</sup>那时，有虔诚的犹太人从天下各国来，住在耶路撒冷。<sup>6</sup>这声音一响，众人都来聚集。各人听见门徒用众人的乡谈说话，就甚纳闷， <sup>7</sup>都惊讶希奇说：&ldquo;看哪，这说话的不都是加利利人吗？<sup>8</sup>我们各人怎么听见他们说我们生来所用的乡谈呢？<sup>9</sup>我们帕提亚人、玛代人、以拦人，和住在美索不达米亚、犹太、加帕多家、本都、亚西亚、<sup>10</sup>弗吕家、旁非利亚、埃及的人，并靠近古利奈的利比亚一带地方的人，从罗马来的客旅中，或是犹太人，或是进犹太教的人，<sup>11</sup>克里特和阿拉伯人，都听见他们用我们的乡谈，讲说　神的大作为。&rdquo;<sup>12</sup>众人就都惊讶猜疑，彼此说：&ldquo;这是甚么意思呢？&rdquo;<sup>13</sup>还有人讥诮说：&ldquo;他们无非是新酒灌满了。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/303.mp4" type="button" class="external-movie">
         观看&nbsp;徒2:1-13&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作，使万民作门徒与建立教会？</li>
	</ul>
	</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<ul class="up">
	<li class="up"><strong>故事重述</strong>

	<ul class="up">
		<li class="up">再读一遍故事。请小组一员口述这故事，其他人根据需要作补充或更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">五旬节（Pentecost）是犹太教三大节期之一，犹太人每年从罗马各地来朝圣，守五旬节。逾越节后的第五十天便是五旬节，是为了纪念旧约时代摩西从上帝领受十诫的日子（<span class="popup-link" @click = "popUp('pop9')"> 出埃及記20</span>章）。

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup>1&nbsp;</sup>&nbsp;神吩咐这一切的话说：&nbsp;<sup>2&nbsp;</sup>&ldquo;我是耶和华你的神，曾将你从埃及地为奴之家领出来。</p>

	<p><sup>3&nbsp;</sup>&ldquo;除了我以外，你不可有别的神。</p>

	<p><sup>4&nbsp;</sup>&ldquo;不可为自己雕刻偶像，也不可做什么形象仿佛上天、下地和地底下、水中的百物。&nbsp;<sup>5&nbsp;</sup>不可跪拜那些像，也不可侍奉它，因为我耶和华你的神是忌邪的神。恨我的，我必追讨他的罪，自父及子，直到三四代；&nbsp;<sup>6&nbsp;</sup>爱我守我诫命的，我必向他们发慈爱，直到千代。</p>

	<p><sup>7&nbsp;</sup>&ldquo;不可妄称耶和华你神的名，因为妄称耶和华名的，耶和华必不以他为无罪。</p>

	<p><sup>8&nbsp;</sup>&ldquo;当记念安息日，守为圣日。&nbsp;<sup>9&nbsp;</sup>六日要劳碌做你一切的工，&nbsp;<sup>10&nbsp;</sup>但第七日是向耶和华你神当守的安息日。这一日你和你的儿女、仆婢、牲畜，并你城里寄居的客旅，无论何工都不可做。&nbsp;<sup>11&nbsp;</sup>因为六日之内，耶和华造天、地、海和其中的万物，第七日便安息，所以耶和华赐福于安息日，定为圣日。</p>

	<p><sup>12&nbsp;</sup>&ldquo;当孝敬父母，使你的日子在耶和华你神所赐你的地上得以长久。</p>

	<p><sup>13&nbsp;</sup>&ldquo;不可杀人。</p>

	<p><sup>14&nbsp;</sup>&ldquo;不可奸淫。</p>

	<p><sup>15&nbsp;</sup>&ldquo;不可偷盗。</p>

	<p><sup>16&nbsp;</sup>&ldquo;不可作假见证陷害人。</p>

	<p><sup>17&nbsp;</sup>&ldquo;不可贪恋人的房屋，也不可贪恋人的妻子、仆婢、牛驴并他一切所有的。&rdquo;</p>

	<h3>民战惧</h3>

	<p><sup>18&nbsp;</sup>众百姓见雷轰、闪电、角声、山上冒烟，就都发颤，远远地站立，&nbsp;<sup>19&nbsp;</sup>对<u>摩西</u>说：&ldquo;求你和我们说话，我们必听；不要神和我们说话，恐怕我们死亡。&rdquo;&nbsp;<sup>20&nbsp;</sup><u>摩西</u>对百姓说：&ldquo;不要惧怕，因为神降临是要试验你们，叫你们时常敬畏他，不致犯罪。&rdquo;&nbsp;<sup>21&nbsp;</sup>于是百姓远远地站立，<u>摩西</u>就挨近神所在的幽暗之中。</p>

	<h3>禁造像</h3>

	<p><sup>22&nbsp;</sup>耶和华对<u>摩西</u>说：&ldquo;你要向以色列人这样说：你们自己看见我从天上和你们说话了。&nbsp;<sup>23&nbsp;</sup>你们不可做什么神像与我相配，不可为自己做金银的神像。&nbsp;<sup>24&nbsp;</sup>你要为我筑土坛，在上面以牛羊献为燔祭和平安祭。凡记下我名的地方，我必到那里赐福给你。&nbsp;<sup>25&nbsp;</sup>你若为我筑一座石坛，不可用凿成的石头，因你在上头一动家具，就把坛污秽了。&nbsp;<sup>26&nbsp;</sup>你上我的坛，不可用台阶，免得露出你的下体来。</p>
	<!-- end bible --></div>
	圣灵降临时，所有的信徒（上一次故事中的那120个人）正聚集在一处。耶稣被捕的那晚，祂教导门徒圣灵是父另外赐的保惠师，要在他们里面（<span class="popup-link" @click = "popUp('pop6')"> 约14:16-17</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>&ldquo;我要求父，父就另外赐给你们一位保惠师，叫他永远与你们同在，<sup class="versenum">17&nbsp;</sup>就是真理的圣灵，乃世人不能接受的，因为不见他，也不认识他。你们却认识他，因他常与你们同在，也要在你们里面。</p>
	<!-- end bible --></div>
	在<span class="popup-link" @click = "popUp('pop10')"> 以西结书36:26-27</span>说到：

	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<p><sup class="versenum">26&nbsp;</sup>&lsquo;我也要赐给你们一个新心，将新灵放在你们里面，又从你们的肉体中除掉石心，赐给你们肉心。<sup class="versenum">27&nbsp;</sup>我必将我的灵放在你们里面，使你们顺从我的律例，谨守遵行我的典章。</p>
	<!-- end bible --></div>
	&ldquo;我也要赐给你们一个新心，将新灵放在你们里面。又从你们的肉体中除掉石心，赐给你们肉心。我必将我的灵放在你们里面，使你们顺从我的律例，谨守遵行我的典章。&rdquo; 我们和圣灵的新关系早在几百年前就透过先知以西结给我们应许了。圣灵被差来是为了安慰、教导、引领我们，叫人为罪为义自己责备自己，使人结出生命的果子，并使门徒得着能力，好继续做耶稣预备他们做的工作（<span class="popup-link" @click = "popUp('pop8')"> 约14-15</span>章）。

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<h3>安慰门徒的心</h3>

	<p><sup class="versenum">1 </sup>&ldquo;你们心里不要忧愁，你们信神，也当信我。<sup class="versenum">2&nbsp;</sup>在我父的家里有许多住处，若是没有，我就早已告诉你们了，我去原是为你们预备地方去。<sup class="versenum">3&nbsp;</sup>我若去为你们预备了地方，就必再来接你们到我那里去，我在哪里，叫你们也在哪里。<sup class="versenum">4&nbsp;</sup>我往哪里去你们知道，那条路你们也知道。&rdquo;<sup class="versenum">5&nbsp;</sup><u class="person underline">多马</u>对他说：&ldquo;主啊，我们不知道你往哪里去，怎么知道那条路呢？&rdquo;</p>

	<h3>主为道路真理生命</h3>

	<p><sup class="versenum">6&nbsp;</sup>耶稣说：&ldquo;我就是道路、真理、生命。若不借着我，没有人能到父那里去。<sup class="versenum">7&nbsp;</sup>你们若认识我，也就认识我的父。从今以后，你们认识他，并且已经看见他。&rdquo;<sup class="versenum">8&nbsp;</sup><u class="person underline">腓力</u>对他说：&ldquo;求主将父显给我们看，我们就知足了。&rdquo;<sup class="versenum">9&nbsp;</sup>耶稣对他说：&ldquo;<u class="person underline">腓力</u>，我与你们同在这样长久，你还不认识我吗？人看见了我，就是看见了父，你怎么说&lsquo;将父显给我们看&rsquo;呢？<sup class="versenum">10&nbsp;</sup>我在父里面，父在我里面，你不信吗？我对你们所说的话，不是凭着自己说的，乃是住在我里面的父做他自己的事。<sup class="versenum">11&nbsp;</sup>你们当信我，我在父里面，父在我里面；即或不信，也当因我所做的事信我。<sup class="versenum">12&nbsp;</sup>我实实在在地告诉你们：我所做的事，信我的人也要做，并且要做比这更大的事，因为我往父那里去。<sup class="versenum">13&nbsp;</sup>你们奉我的名无论求什么，我必成就，叫父因儿子得荣耀。<sup class="versenum">14&nbsp;</sup>你们若奉我名求告什么，我必成就。<sup class="versenum">15&nbsp;</sup>你们若爱我，就必遵守我的命令。</p>

	<h3>应许赐保惠师</h3>

	<p><sup class="versenum">16&nbsp;</sup>&ldquo;我要求父，父就另外赐给你们一位保惠师，叫他永远与你们同在，<sup class="versenum">17&nbsp;</sup>就是真理的圣灵，乃世人不能接受的，因为不见他，也不认识他。你们却认识他，因他常与你们同在，也要在你们里面。<sup class="versenum">18&nbsp;</sup>我不撇下你们为孤儿，我必到你们这里来。<sup class="versenum">19&nbsp;</sup>还有不多的时候，世人不再看见我，你们却看见我，因为我活着，你们也要活着。<sup class="versenum">20&nbsp;</sup>到那日，你们就知道我在父里面，你们在我里面，我也在你们里面。</p>

	<h3>爱主的必遵守主道</h3>

	<p><sup class="versenum">21&nbsp;</sup>&ldquo;有了我的命令又遵守的，这人就是爱我的。爱我的必蒙我父爱他，我也要爱他，并且要向他显现。&rdquo;<sup class="versenum">22&nbsp;</sup><u class="person underline">犹大</u>（不是加略人<u class="person underline">犹大</u>）问耶稣说：&ldquo;主啊，为什么要向我们显现，不向世人显现呢？&rdquo;<sup class="versenum">23&nbsp;</sup>耶稣回答说：&ldquo;人若爱我，就必遵守我的道，我父也必爱他，并且我们要到他那里去，与他同住。<sup class="versenum">24&nbsp;</sup>不爱我的人就不遵守我的道；你们所听见的道不是我的，乃是差我来之父的道。</p>

	<p><sup class="versenum">25&nbsp;</sup>&ldquo;我还与你们同住的时候，已将这些话对你们说了。<sup class="versenum">26&nbsp;</sup>但保惠师，就是父因我的名所要差来的圣灵，他要将一切的事指教你们，并且要叫你们想起我对你们所说的一切话。<sup class="versenum">27&nbsp;</sup>我留下平安给你们，我将我的平安赐给你们。我所赐的不像世人所赐的，你们心里不要忧愁，也不要胆怯。<sup class="versenum">28&nbsp;</sup>你们听见我对你们说了，我去，还要到你们这里来。你们若爱我，因我到父那里去，就必喜乐，因为父是比我大的。<sup class="versenum">29&nbsp;</sup>现在事情还没有成就，我预先告诉你们，叫你们到事情成就的时候，就可以信。<sup class="versenum">30&nbsp;</sup>以后我不再和你们多说话，因为这世界的王将到；他在我里面是毫无所有，<sup class="versenum">31&nbsp;</sup>但要叫世人知道我爱父，并且父怎样吩咐我，我就怎样行。起来，我们走吧！&rdquo;</p>

	<h3>主是真葡萄树</h3>

	<p><sup class="versenum">1 </sup>&ldquo;我是真葡萄树，我父是栽培的人。<sup class="versenum">2&nbsp;</sup>凡属我不结果子的枝子，他就剪去；凡结果子的，他就修理干净，使枝子结果子更多。<sup class="versenum">3&nbsp;</sup>现在你们因我讲给你们的道，已经干净了。<sup class="versenum">4&nbsp;</sup>你们要常在我里面，我也常在你们里面。枝子若不常在葡萄树上，自己就不能结果子；你们若不常在我里面，也是这样。<sup class="versenum">5&nbsp;</sup>我是葡萄树，你们是枝子。常在我里面的，我也常在他里面，这人就多结果子；因为离了我，你们就不能做什么。<sup class="versenum">6&nbsp;</sup>人若不常在我里面，就像枝子丢在外面枯干，人拾起来扔在火里烧了。<sup class="versenum">7&nbsp;</sup>你们若常在我里面，我的话也常在你们里面，凡你们所愿意的，祈求，就给你们成就。<sup class="versenum">8&nbsp;</sup>你们多结果子，我父就因此得荣耀，你们也就是我的门徒了。</p>

	<h3>当效法主的爱</h3>

	<p><sup class="versenum">9&nbsp;</sup>&ldquo;我爱你们，正如父爱我一样，你们要常在我的爱里。<sup class="versenum">10&nbsp;</sup>你们若遵守我的命令，就常在我的爱里，正如我遵守了我父的命令，常在他的爱里。<sup class="versenum">11&nbsp;</sup>这些事我已经对你们说了，是要叫我的喜乐存在你们心里，并叫你们的喜乐可以满足。<sup class="versenum">12&nbsp;</sup>你们要彼此相爱，像我爱你们一样，这就是我的命令。<sup class="versenum">13&nbsp;</sup>人为朋友舍命，人的爱心没有比这个大的。<sup class="versenum">14&nbsp;</sup>你们若遵行我所吩咐的，就是我的朋友了。<sup class="versenum">15&nbsp;</sup>以后我不再称你们为仆人，因仆人不知道主人所做的事。我乃称你们为朋友，因我从父所听见的，已经都告诉你们了。<sup class="versenum">16&nbsp;</sup>不是你们拣选了我，是我拣选了你们，并且分派你们去结果子，叫你们的果子常存，使你们奉我的名无论向父求什么，他就赐给你们。<sup class="versenum">17&nbsp;</sup>我这样吩咐你们，是要叫你们彼此相爱。</p>

	<p><sup class="versenum">18&nbsp;</sup>&ldquo;世人若恨你们，你们知道，恨你们以先已经恨我了。<sup class="versenum">19&nbsp;</sup>你们若属世界，世界必爱属自己的。只因你们不属世界，乃是我从世界中拣选了你们，所以世界就恨你们。<sup class="versenum">20&nbsp;</sup>你们要记念我从前对你们所说的话：&lsquo;仆人不能大于主人。&rsquo;他们若逼迫了我，也要逼迫你们；若遵守了我的话，也要遵守你们的话。<sup class="versenum">21&nbsp;</sup>但他们因我的名要向你们行这一切的事，因为他们不认识那差我来的。<sup class="versenum">22&nbsp;</sup>我若没有来教训他们，他们就没有罪，但如今他们的罪无可推诿了。<sup class="versenum">23&nbsp;</sup>恨我的，也恨我的父。<sup class="versenum">24&nbsp;</sup>我若没有在他们中间行过别人未曾行的事，他们就没有罪；但如今连我与我的父，他们也看见也恨恶了。<sup class="versenum">25&nbsp;</sup>这要应验他们律法上所写的话说：&lsquo;他们无故地恨我。&rsquo;<sup class="versenum">26&nbsp;</sup>但我要从父那里差保惠师来，就是从父出来真理的圣灵；他来了，就要为我作见证。<sup class="versenum">27&nbsp;</sup>你们也要作见证，因为你从起头就与我同在。</p>
	<!-- end bible --></div>
	借着圣灵的同在与能力，无论男女皆能让耶稣的工作延续下去。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒2:4</p>

<p class="forward bible">他们就都被圣灵充满，按著圣灵所赐的口才说起别国的话来。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">我们应该如何看待&ldquo;讲方言&rdquo;和&ldquo; 被圣灵充满&rdquo; ？如果运用在我们的信仰中？</li>
	<li class="forward">圣灵以及圣灵充满对你意味着什么？你有经历被圣灵充满吗？如何？</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">本周花时间阅读附录：《怎样被圣灵充满》，下周在小组中分享心得。</li>
	<li class="forward">本周与门徒一起操练被圣灵充满，在生活上依靠圣灵行事，结出圣灵的果子；求主让你们经历领人归主的喜乐。</li>
	<li class="forward">本周主动与2位弟兄/姐妹分享《被圣灵充满》的小册子，并记录在《信徒动员表》上。</li>
	<li class="forward">主动参加教会的祷告会，与教会弟兄姐妹一起同心合意寻求上帝在这地的作为，并在主里同心兴旺福音。若教会与教会，牧者与牧者，同工与同工或弟兄姐妹之间有任何嫌隙，祷告神，彼此在基督里愿意舍己和谦让，在言行举止上为荣耀基督而行，讨神的喜悦和称许。</li>
	<li class="forward">花3分钟写下你在本课的学习心得，或是你未来一周可能有的其他行动点。</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note3Text')"
        id="note3Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音祷告</h2>

<p class="forward">信实且慈爱的主耶稣，我们感谢赞美祢。我们有圣灵作我们的保惠师，指教我们当行的道路，让我们真认识祢，并体验祢长阔高深的慈爱与复活的大能。唯有圣灵能使人心回转，也唯有圣灵能使人为罪、为义、为审判、自己责备自己。主啊，使万民作祢门徒是天父的心意，求主坚定我们的心志，刚强我们的信心，无论在任何的境况，都靠圣灵活出基督的真实，讲说神的大能，并将荣耀归给神。主啊，当我们众人愿意放下自己，同心合意在祢面前寻求，祢应许就在我们当中，并要我们做更大的事。奉主耶稣的圣名祷告，阿们！</p>

<p class="forward">&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->