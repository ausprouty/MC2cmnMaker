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
                        <div class="chapter_number ltr"><h1>3.1.</h1></div>
                        <div class="chapter_title ltr"><h1>《怎样被圣灵充满》</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <h2><br />
郑国治牧师著</h2>

<p class="forward">怎样可受圣灵充满？圣灵的内住、圣灵的洗与圣灵的充满是怎么一回事？圣灵与圣灵的恩赐又怎样划分？</p>

<h2 class="forward">难题</h2>

<p class="forward">好多基督徒从没有受圣灵充满，而过着属肉体的生活。有的不知道怎样受圣灵充满；有的怕被圣灵充满；有的有圣灵充满的知识，却没有受圣灵充满的经历；有的把圣灵充满的知识当作是受圣灵充满的事实；有的把圣灵的洗与圣灵的充满混为一谈；有的把圣灵本身与圣灵的恩赐搞在一起。这些都是当前需要解诀的难题。</p>

<h2 class="forward">经文：徒2:37-39</h2>

<p class="forward"><sup>37</sup>众人听见这话，觉得扎心，就对彼得和其余的使徒说：&ldquo;弟兄们，我们当怎样行？&rdquo;<sup>38</sup>彼得说：&ldquo;你们各人要悔改，奉耶稣基督的名受洗，叫你们的罪得赦，就必领受所赐的圣灵；<sup>39</sup>因为这应许是给你们和你们的儿女，并一切在远方的人，就是主我们　神所召来的。&rdquo;</p>

<p class="forward">&nbsp;</p>

<h1 class="forward">圣灵的工作</h1>

<p>&nbsp;</p>

<h2 class="forward">1. 圣灵充满</h2>

<ul>
	<li class="nobreak-final-final">受圣灵充满就是圣灵管理，从圣灵得力。让我们遵从顺服神的命令，&ldquo;乃要被圣灵充满&rdquo;（<span class="popup-link" @click = "popUp('pop1')"> 弗5:18</span>）。

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>不要醉酒，酒能使人放荡；乃要被圣灵充满。</p>
	<!-- end bible --></div>
	为的就是荣耀神，结出圣灵的果子（<span class="popup-link" @click = "popUp('pop2')"> 加5:22-23</span>），

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">22&nbsp;</sup>圣灵所结的果子，就是仁爱、喜乐、和平、忍耐、恩慈、良善、信实、<sup class="versenum">23&nbsp;</sup>温柔、节制；这样的事没有律法禁止。</p>
	<!-- end bible --></div>
	为主在近处与远方作见证（<span class="popup-link" @click = "popUp('pop3')"> 徒1:8</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。&rdquo;</p>
	<!-- end bible --></div>
	抢救灵魂，使我们生命长进，建立基督的身份，让圣灵管理我们成为所喜悦的人。</li>
</ul>

<h2 class="forward">2. 圣灵的洗</h2>

<ul>
	<li class="nobreak-final-final">当一个人重生时，立刻就领受了&ldquo;圣灵的洗&rdquo;。&ldquo;他便救了我们，并不是因我们自己所行的义，乃是照他的怜悯，藉着重生的洗和圣灵的更新。圣灵就是神藉着耶稣基督我们救主厚厚浇灌在我们身上的，好叫我们因他的恩得称为义，可以凭永生的盼望成为后嗣&rdquo;（<span class="popup-link" @click = "popUp('pop4')"> 多3:5-7</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>他便救了我们，并不是因我们自己所行的义，乃是照他的怜悯，借着重生的洗和圣灵的更新。<sup class="versenum">6&nbsp;</sup>圣灵就是神借着耶稣基督&mdash;&mdash;我们救主厚厚浇灌在我们身上的，<sup class="versenum">7&nbsp;</sup>好叫我们因他的恩得称为义，可以凭着永生的盼望成为后嗣。</p>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">当我们重生就受了圣灵的洗、圣灵的更新和圣灵的印记（<span class="popup-link" @click = "popUp('pop5')"> 弗1:13</span>）；
	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>你们既听见真理的道，就是那叫你们得救的福音，也信了基督，既然信他，就受了所应许的圣灵为印记。</p>
	<!-- end bible --></div>
	也在身体里互为肢体，&ldquo;我们不拘是犹太人，是希利尼人，是为奴的，是自主的，都从一位圣灵受洗，成了一个身体，饮于一位圣灵&rdquo;（<span class="popup-link" @click = "popUp('pop6')"> 林前12:13</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>我们不拘是犹太人，是希腊人，是为奴的，是自主的，都从一位圣灵受洗，成了一个身体，饮于一位圣灵。</p>
	<!-- end bible --></div>
	根据希腊文法，圣灵的洗发生在我们身上只有一次，而圣灵充满是多次的，常常地被充满。圣灵的洗只有重生时才发生。我们互为肢体是以属灵生命为原则，有圣灵的洗和属天的生命才能在属灵的家里有分。</li>
</ul>

<h2 class="forward">3. 圣灵的内住</h2>

<ul>
	<li class="nobreak-final-final">信徒一重生，立刻有圣灵的内住（<span class="popup-link" @click = "popUp('pop7')"> 林前6:19</span>）。

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>岂不知你们的身子就是圣灵的殿吗？这圣灵是从神而来，住在你们里头的。并且你们不是自己的人，</p>
	<!-- end bible --></div>
	圣灵永远与我们同在（<span class="popup-link" @click = "popUp('pop8')"> 约14:16</span>）。

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>&ldquo;我要求父，父就另外赐给你们一位保惠师，叫他永远与你们同在，</p>
	<!-- end bible --></div>
	&ldquo;人若没有基督的灵，就不是属基督的&rdquo;（<span class="popup-link" @click = "popUp('pop9')"> 罗8:9</span>下）。

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>如果神的灵住在你们心里，你们就不属肉体，乃属圣灵了。人若没有基督的灵，就不是属基督的。</p>
	<!-- end bible --></div>
	信徒与非信徒之分别也就在此。虽然每一位信徒都领受了圣灵的洗，有圣灵的内住，但不一定都被圣灵充满。受圣灵充满是多次的，我们应该时时刻刻受圣灵管理，从圣灵得力，顺着圣灵而行。其中最重要的关键，就是圣灵的充满。</li>
</ul>

<p class="forward">&nbsp;</p>

<h1 class="forward">如何被圣灵充满</h1>

<p>&nbsp;</p>

<h2 class="forward">1. 真心悔改（<span class="popup-link" @click = "popUp('pop55')"> 徒2:37</span>）</h2>

<div class="popup invisible" id="pop55"><!-- begin bible -->
<p><sup class="versenum">37&nbsp;</sup>众人听见这话，觉得扎心，就对<u class="person underline">彼得</u>和其余的使徒说：&ldquo;弟兄们，我们当怎样行？&rdquo;</p>
<!-- end bible --></div>

<p>神的道比两刃的利剑更快，圣灵动工，听众更哀心折服，良心受责。&ldquo;众人觉得扎心&rdquo;，更会真诚悔改。拿撒勒人耶稣既然是弥塞亚（受膏者），他们凭什么权利拒绝他，并把他钉在十字架呢？</p>

<ul>
	<li class="forward">&ldquo;扎心&rdquo;就是圣灵使人知罪的感觉，悔罪是信仰的起步。圣灵能叫世人为罪，为义，为审判，自己责备自己（<span class="popup-link" @click = "popUp('pop10')"> 约16:8</span>）。

	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>他既来了，就要叫世人为罪、为义、为审判，自己责备自己。</p>
	<!-- end bible --></div>
	</li>
	<li class="forward">&ldquo;罪使人与神隔绝，罪使神掩面不听&rdquo;（<span class="popup-link" @click = "popUp('pop11')"> 赛59:2</span>）。
	<div class="popup invisible" id="pop11"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>但你们的罪孽使你们与神隔绝，你们的罪恶使他掩面不听你们。</p>
	<!-- end bible --></div>
	</li>
	<li class="forward">&ldquo;我若心里注重罪孽，主必不听&rdquo;（<span class="popup-link" @click = "popUp('pop12')"> 诗66:18</span>）。
	<div class="popup invisible" id="pop12"><!-- begin bible -->
	<div>
	<p><sup class="versenum">18&nbsp;</sup>我若心里注重罪孽，主必不听。</p>
	</div>
	<!-- end bible --></div>
	</li>
	<li class="forward">&ldquo;神所要的祭，就是忧伤的灵。神啊，忧伤痛悔的心，你必不轻看&rdquo;（<span class="popup-link" @click = "popUp('pop13')"> 诗51:17</span>）。
	<div class="popup invisible" id="pop13"><!-- begin bible -->
	<div>
	<p><sup class="versenum">17&nbsp;</sup>神所要的祭就是忧伤的灵，神啊，忧伤痛悔的心，你必不轻看。</p>
	</div>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">以色列第一位开国君王&mdash;&mdash;扫罗王，因怕非利士人（敌人），而作了糊涂事，没有遵守神所吩咐他的命令，竟然自我辩护，以献祭敬拜神为理由。然而神要的是听命胜过献祭，顺从胜过公羊的脂油（<span class="popup-link" @click = "popUp('pop52')"> 撒上 13:8-14</span>；
	<div class="popup invisible" id="pop52"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup><u class="person underline">扫罗</u>照着<u class="person underline">撒母耳</u>所定的日期等了七日。<u class="person underline">撒母耳</u>还没有来到吉甲，百姓也离开<u class="person underline">扫罗</u>散去了。<sup class="versenum">9&nbsp;</sup><u class="person underline">扫罗</u>说：&ldquo;把燔祭和平安祭带到我这里来。&rdquo;<u class="person underline">扫罗</u>就献上燔祭。<sup class="versenum">10&nbsp;</sup>刚献完燔祭，<u class="person underline">撒母耳</u>就到了。<u class="person underline">扫罗</u>出去迎接他，要问他好。<sup class="versenum">11&nbsp;</sup><u class="person underline">撒母耳</u>说：&ldquo;你做的是什么事呢？&rdquo;<u class="person underline">扫罗</u>说：&ldquo;因为我见百姓离开我散去，你也不照所定的日期来到，而且非利士人聚集在密抹，<sup class="versenum">12&nbsp;</sup>所以我心里说，恐怕我没有祷告耶和华。非利士人下到吉甲攻击我，我就勉强献上燔祭。&rdquo;<sup class="versenum">13&nbsp;</sup><u class="person underline">撒母耳</u>对<u class="person underline">扫罗</u>说：&ldquo;你做了糊涂事了！没有遵守耶和华你神所吩咐你的命令。若遵守，耶和华必在以色列中坚立你的王位，直到永远。<sup class="versenum">14&nbsp;</sup>现在你的王位必不长久。耶和华已经寻着一个合他心意的人，立他做百姓的君，因为你没有遵守耶和华所吩咐你的。&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop53')"> 撒上15:3</span>，

	<div class="popup invisible" id="pop53"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>现在你要去击打亚玛力人，灭尽他们所有的，不可怜惜他们，将男女、孩童、吃奶的，并牛、羊、骆驼和驴尽行杀死。&rsquo;&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop54')"> 撒上9-10</span>，

	<div class="popup invisible" id="pop54"><!-- begin bible -->
	<h3>扫罗诣撒母耳</h3>

	<p><sup class="versenum">1 </sup>有一个便雅悯人，名叫<u class="person underline">基士</u>，是便雅悯人<u class="person underline">亚斐亚</u>的玄孙、<u class="person underline">比歌拉</u>的曾孙、<u class="person underline">洗罗</u>的孙子、<u class="person underline">亚别</u>的儿子，是个大能的勇士。<sup class="versenum">2&nbsp;</sup>他有一个儿子，名叫<u class="person underline">扫罗</u>，又健壮，又俊美，在以色列人中没有一个能比他的，身体比众民高过一头。<sup class="versenum">3&nbsp;</sup><u class="person underline">扫罗</u>的父亲<u class="person underline">基士</u>丢了几头驴，他就吩咐儿子<u class="person underline">扫罗</u>说：&ldquo;你带一个仆人去寻找驴。&rdquo;<sup class="versenum">4&nbsp;</sup><u class="person underline">扫罗</u>就走过以法莲山地，又过沙利沙地，都没有找着；又过沙琳地，驴也不在那里；又过便雅悯地，还没有找着。</p>

	<p><sup class="versenum">5&nbsp;</sup>到了苏弗地，<u class="person underline">扫罗</u>对跟随他的仆人说：&ldquo;我们不如回去，恐怕我父亲不为驴挂心，反为我们担忧。&rdquo;<sup class="versenum">6&nbsp;</sup>仆人说：&ldquo;这城里有一位神人，是众人所尊重的，凡他所说的全都应验。我们不如往他那里去，或者他能将我们当走的路指示我们。&rdquo;<sup class="versenum">7&nbsp;</sup><u class="person underline">扫罗</u>对仆人说：&ldquo;我们若去，有什么可以送那人呢？我们囊中的食物都吃尽了，也没有礼物可以送那神人。我们还有什么没有？&rdquo;<sup class="versenum">8&nbsp;</sup>仆人回答<u class="person underline">扫罗</u>说：&ldquo;我手里有银子一舍客勒的四分之一，可以送那神人，请他指示我们当走的路。&rdquo;<sup class="versenum">9&nbsp;</sup>（从前以色列中，若有人去问神，就说：&ldquo;我们问先见去吧。&rdquo;现在称为先知的，从前称为先见。）<sup class="versenum">10&nbsp;</sup><u class="person underline">扫罗</u>对仆人说：&ldquo;你说的是，我们可以去。&rdquo;于是他们往神人所住的城里去了。</p>

	<p><sup class="versenum">11&nbsp;</sup>他们上坡要进城，就遇见几个少年女子出来打水，问她们说：&ldquo;先见在这里没有？&rdquo;<sup class="versenum">12&nbsp;</sup>女子回答说：&ldquo;在这里。他在你们前面，快去吧！他今日正到城里，因为今日百姓要在丘坛献祭。<sup class="versenum">13&nbsp;</sup>在他还没有上丘坛吃祭物之先，你们一进城必遇见他，因他未到百姓不能吃，必等他先祝祭，然后请的客才吃。现在你们上去，这时候必遇见他。&rdquo;<sup class="versenum">14&nbsp;</sup>二人就上去。将进城的时候，<u class="person underline">撒母耳</u>正迎着他们来，要上丘坛去。</p>

	<h3>撒母耳与扫罗偕食</h3>

	<p><sup class="versenum">15&nbsp;</sup><u class="person underline">扫罗</u>未到的前一日，耶和华已经指示<u class="person underline">撒母耳</u>说：<sup class="versenum">16&nbsp;</sup>&ldquo;明日这时候，我必使一个人从便雅悯地到你这里来，你要膏他做我民以色列的君。他必救我民脱离非利士人的手。因我民的哀声上达于我，我就眷顾他们。&rdquo;<sup class="versenum">17&nbsp;</sup><u class="person underline">撒母耳</u>看见<u class="person underline">扫罗</u>的时候，耶和华对他说：&ldquo;看哪，这人就是我对你所说的，他必治理我的民。&rdquo;<sup class="versenum">18&nbsp;</sup><u class="person underline">扫罗</u>在城门里走到<u class="person underline">撒母耳</u>跟前，说：&ldquo;请告诉我，先见的寓所在哪里？&rdquo;<sup class="versenum">19&nbsp;</sup><u class="person underline">撒母耳</u>回答说：&ldquo;我就是先见。你在我前面上丘坛去，因为你们今日必与我同席。明日早晨我送你去，将你心里的事都告诉你。<sup class="versenum">20&nbsp;</sup>至于你前三日所丢的那几头驴，你心里不必挂念，已经找着了。以色列众人所仰慕的是谁呢？不是仰慕你和你父的全家吗？&rdquo;<sup class="versenum">21&nbsp;</sup><u class="person underline">扫罗</u>说：&ldquo;我不是以色列支派中至小的便雅悯人吗？我家不是便雅悯支派中至小的家吗？你为何对我说这样的话呢？&rdquo;</p>

	<p><sup class="versenum">22&nbsp;</sup><u class="person underline">撒母耳</u>领<u class="person underline">扫罗</u>和他仆人进了客堂，使他们在请来的客中坐首位，客约有三十个人。<sup class="versenum">23&nbsp;</sup><u class="person underline">撒母耳</u>对厨役说：&ldquo;我交给你收存的那一份祭肉现在可以拿来。&rdquo;<sup class="versenum">24&nbsp;</sup>厨役就把收存的腿拿来，摆在<u class="person underline">扫罗</u>面前。<u class="person underline">撒母耳</u>说：&ldquo;这是所留下的，放在你面前，吃吧！因我请百姓的时候，特意为你存留这肉到此时。&rdquo;当日，<u class="person underline">扫罗</u>就与<u class="person underline">撒母耳</u>同席。</p>

	<p><sup class="versenum">25&nbsp;</sup>众人从丘坛下来进城，<u class="person underline">撒母耳</u>和<u class="person underline">扫罗</u>在房顶上说话。<sup class="versenum">26&nbsp;</sup>次日清早起来，黎明的时候，<u class="person underline">扫罗</u>在房顶上，<u class="person underline">撒母耳</u>呼叫他说：&ldquo;起来吧，我好送你回去。&rdquo;<u class="person underline">扫罗</u>就起来，和<u class="person underline">撒母耳</u>一同出去。<sup class="versenum">27&nbsp;</sup>二人下到城角，<u class="person underline">撒母耳</u>对<u class="person underline">扫罗</u>说：&ldquo;要吩咐仆人先走。（仆人就先走了。）你且站在这里，等我将神的话传于你听。&rdquo;</p>

	<h3>撒母耳膏扫罗</h3>

	<p><sup class="versenum">1 </sup><u class="person underline">撒母耳</u>拿瓶膏油倒在<u class="person underline">扫罗</u>的头上，与他亲嘴，说：&ldquo;这不是耶和华膏你做他产业的君吗？<sup class="versenum">2&nbsp;</sup>你今日与我离别之后，在便雅悯境内的泄撒，靠近<u class="person underline">拉结</u>的坟墓，要遇见两个人。他们必对你说：&lsquo;你去找的那几头驴已经找着了。现在你父亲不为驴挂心，反为你担忧，说：&ldquo;我为儿子怎么才好呢？&rdquo;&rsquo;<sup class="versenum">3&nbsp;</sup>你从那里往前行，到了他泊的橡树那里，必遇见三个往伯特利去拜神的人，一个带着三只山羊羔，一个带着三个饼，一个带着一皮袋酒。<sup class="versenum">4&nbsp;</sup>他们必问你安，给你两个饼，你就从他们手中接过来。<sup class="versenum">5&nbsp;</sup>此后你到神的山，在那里有非利士人的防兵。你到了城的时候，必遇见一班先知从丘坛下来，前面有鼓瑟的、击鼓的、吹笛的、弹琴的，他们都受感说话。<sup class="versenum">6&nbsp;</sup>耶和华的灵必大大感动你，你就与他们一同受感说话，你要变为新人。<sup class="versenum">7&nbsp;</sup>这兆头临到你，你就可以趁时而做，因为神与你同在。<sup class="versenum">8&nbsp;</sup>你当在我以先下到吉甲，我也必下到那里献燔祭和平安祭。你要等候七日，等我到了那里，指示你当行的事。&rdquo;</p>

	<h3>扫罗感灵而言</h3>

	<p><sup class="versenum">9&nbsp;</sup><u class="person underline">扫罗</u>转身离别<u class="person underline">撒母耳</u>，神就赐他一个新心。当日这一切兆头都应验了。<sup class="versenum">10&nbsp;</sup><u class="person underline">扫罗</u>到了那山，有一班先知遇见他，神的灵大大感动他，他就在先知中受感说话。<sup class="versenum">11&nbsp;</sup>素来认识<u class="person underline">扫罗</u>的，看见他和先知一同受感说话，就彼此说：&ldquo;<u class="person underline">基士</u>的儿子遇见什么了？<u class="person underline">扫罗</u>也列在先知中吗？&rdquo;<sup class="versenum">12&nbsp;</sup>那地方有一个人说：&ldquo;这些人的父亲是谁呢？&rdquo;此后有句俗语说：&ldquo;<u class="person underline">扫罗</u>也列在先知中吗？&rdquo;<sup class="versenum">13&nbsp;</sup><u class="person underline">扫罗</u>受感说话已毕，就上丘坛去了。</p>

	<p><sup class="versenum">14&nbsp;</sup><u class="person underline">扫罗</u>的叔叔问<u class="person underline">扫罗</u>和他仆人说：&ldquo;你们往哪里去了？&rdquo;回答说：&ldquo;找驴去了。我们见没有驴，就到了<u class="person underline">撒母耳</u>那里。&rdquo;<sup class="versenum">15&nbsp;</sup><u class="person underline">扫罗</u>的叔叔说：&ldquo;请将<u class="person underline">撒母耳</u>向你们所说的话告诉我。&rdquo;<sup class="versenum">16&nbsp;</sup><u class="person underline">扫罗</u>对他叔叔说：&ldquo;他明明地告诉我们驴已经找着了。&rdquo;至于<u class="person underline">撒母耳</u>所说的国事，<u class="person underline">扫罗</u>却没有告诉叔叔。</p>

	<p><sup class="versenum">17&nbsp;</sup><u class="person underline">撒母耳</u>将百姓招聚到米斯巴耶和华那里，<sup class="versenum">18&nbsp;</sup>对他们说：&ldquo;耶和华以色列的神如此说：&lsquo;我领你们以色列人出埃及，救你们脱离埃及人的手，又救你们脱离欺压你们各国之人的手。<sup class="versenum">19&nbsp;</sup>你们今日却厌弃了救你们脱离一切灾难的神，说：&ldquo;求你立一个王治理我们。&rdquo;&rsquo;现在你们应当按着支派、宗族都站在耶和华面前。&rdquo;<sup class="versenum">20&nbsp;</sup>于是，<u class="person underline">撒母耳</u>使以色列众支派近前来掣签，就掣出便雅悯支派来；<sup class="versenum">21&nbsp;</sup>又使便雅悯支派按着宗族近前来，就掣出玛特利族；从其中，又掣出<u class="person underline">基士</u>的儿子<u class="person underline">扫罗</u>。众人寻找他却寻不着，<sup class="versenum">22&nbsp;</sup>就问耶和华说：&ldquo;那人到这里来了没有？&rdquo;耶和华说：&ldquo;他藏在器具中了。&rdquo;<sup class="versenum">23&nbsp;</sup>众人就跑去从那里领出他来。他站在百姓中间，身体比众民高过一头。<sup class="versenum">24&nbsp;</sup><u class="person underline">撒母耳</u>对众民说：&ldquo;你们看耶和华所拣选的人，众民中有可比他的吗？&rdquo;众民就大声欢呼说：&ldquo;愿王万岁！&rdquo;</p>

	<p><sup class="versenum">25&nbsp;</sup><u class="person underline">撒母耳</u>将国法对百姓说明，又记在书上，放在耶和华面前，然后遣散众民，各回各家去了。<sup class="versenum">26&nbsp;</sup><u class="person underline">扫罗</u>往基比亚回家去，有神感动的一群人跟随他。<sup class="versenum">27&nbsp;</sup>但有些匪徒说：&ldquo;这人怎能救我们呢？&rdquo;就藐视他，没有送他礼物。<u class="person underline">扫罗</u>却不理会。</p>
	<!-- end bible --></div>
	撒上13-31）。表面看来扫罗王打了胜仗，他击败非利士人。然而从属灵的角度看，他的灵性已吃了完全的败仗，甚至被神厌弃。这就是不肯真心悔改和完全顺从的悲局。</li>
</ul>

<p class="forward">旧约的大卫王，虽然屡有过失，但他一心愿遵行神旨意，肯真心彻底悔改（诗51篇）。神不但赦免他的罪，神也持守与他所立的永约。神是满有慈爱怜悯的，只要人肯悔改归向他，都必得着所赐的圣灵。</p>

<ul>
	<li class="nobreak-final-final">旧约以赛亚先知，贵为三朝宰相，是神学家、宗教家、政治家，他在一人之下。然而，当他看到神荣耀的异象，便认识自己罪人本相，真诚认罪悔改，蒙神完全的赦免，并受神差遣负起神所托负的使命（<span class="popup-link" @click = "popUp('pop17')"> 赛 6:1-8</span>）。

	<div class="popup invisible" id="pop17"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>当<u class="person underline">乌西雅</u>王崩的那年，我见主坐在高高的宝座上，他的衣裳垂下，遮满圣殿。<sup class="versenum">2&nbsp;</sup>其上有撒拉弗侍立，各有六个翅膀，用两个翅膀遮脸，两个翅膀遮脚，两个翅膀飞翔，<sup class="versenum">3&nbsp;</sup>彼此呼喊说：&ldquo;圣哉，圣哉，圣哉，万军之耶和华！他的荣光充满全地！&rdquo;<sup class="versenum">4&nbsp;</sup>因呼喊者的声音，门槛的根基震动，殿充满了烟云。<sup class="versenum">5&nbsp;</sup>那时我说：&ldquo;祸哉！我灭亡了。因为我是嘴唇不洁的人，又住在嘴唇不洁的民中，又因我眼见大君王万军之耶和华。&rdquo;</p>

	<p><sup class="versenum">6&nbsp;</sup>有一撒拉弗飞到我跟前，手里拿着红炭，是用火剪从坛上取下来的，<sup class="versenum">7&nbsp;</sup>将炭沾我的口，说：&ldquo;看哪，这炭沾了你的嘴，你的罪孽便除掉，你的罪恶就赦免了。&rdquo;<sup class="versenum">8&nbsp;</sup>我又听见主的声音说：&ldquo;我可以差遣谁呢？谁肯为我们去呢？&rdquo;我说：&ldquo;我在这里，请差遣我！&rdquo;</p>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">彼得虽三次不认主，犯了极严重的大罪。然而他肯谦卑悔改，流泪悔悟，神照样重用他 （<span class="popup-link" @click = "popUp('pop18')"> 太26:74-75</span>；
	<div class="popup invisible" id="pop18"><!-- begin bible -->
	<p><sup class="versenum">74&nbsp;</sup><u class="person underline">彼得</u>就发咒起誓地说：&ldquo;我不认得那个人！&rdquo;立时，鸡就叫了。<sup class="versenum">75&nbsp;</sup><u class="person underline">彼得</u>想起耶稣所说的话：&ldquo;鸡叫以先，你要三次不认我。&rdquo;他就出去痛哭。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop19')"> 约21:15-19</span>）。

	<div class="popup invisible" id="pop19"><!-- begin bible -->
	<p><sup class="versenum">15&nbsp;</sup>他们吃完了早饭，耶稣对<u class="person underline">西门</u><u class="person underline">彼得</u>说：&ldquo;<u class="person underline">约翰</u>的儿子<u class="person underline">西门</u>，你爱我比这些更深吗？&rdquo;<u class="person underline">彼得</u>说：&ldquo;主啊，是的，你知道我爱你。&rdquo;耶稣对他说：&ldquo;你喂养我的小羊。&rdquo;<sup class="versenum">16&nbsp;</sup>耶稣第二次又对他说：&ldquo;<u class="person underline">约翰</u>的儿子<u class="person underline">西门</u>，你爱我吗？&rdquo;<u class="person underline">彼得</u>说：&ldquo;主啊，是的，你知道我爱你。&rdquo;耶稣说：&ldquo;你牧养我的羊。&rdquo;<sup class="versenum">17&nbsp;</sup>第三次对他说：&ldquo;<u class="person underline">约翰</u>的儿子<u class="person underline">西门</u>，你爱我吗？&rdquo;<u class="person underline">彼得</u>因为耶稣第三次对他说&ldquo;你爱我吗&rdquo;，就忧愁，对耶稣说：&ldquo;主啊，你是无所不知的，你知道我爱你。&rdquo;耶稣说：&ldquo;你喂养我的羊。<sup class="versenum">18&nbsp;</sup>我实实在在地告诉你：你年少的时候，自己束上带子，随意往来；但年老的时候，你要伸出手来，别人要把你束上，带你到不愿意的地方。&rdquo;<sup class="versenum">19&nbsp;</sup>耶稣说这话，是指着<u class="person underline">彼得</u>要怎样死荣耀神。说了这话，就对他说：&ldquo;你跟从我吧！&rdquo;</p>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">孔子说：&ldquo;不善不改，是吾忧也！&rdquo;知过能改，善莫大焉！何况圣经有清楚的教训：&ldquo;我们若认自己的罪，神是信实的，是公义的，必要赦免我们的罪，洗净我们一切的不义。&rdquo;（<span class="popup-link" @click = "popUp('pop20')"> 约壹1:9</span>）
	<div class="popup invisible" id="pop20"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>我们若认自己的罪，神是信实的，是公义的，必要赦免我们的罪，洗净我们一切的不义。</p>
	<!-- end bible --></div>
	我们罪得涂抹是悔改向神的结果（<span class="popup-link" @click = "popUp('pop56')"> 徒3:19</span>）。

	<div class="popup invisible" id="pop56"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>所以，你们当悔改归正，使你们的罪得以涂抹，这样那安舒的日子就必从主面前来到，</p>
	<!-- end bible --></div>
	当人悔改归向神，神就赐下圣灵。百夫长哥尼流敬畏神，虔诚悔改信主，就领受圣灵。</li>
</ul>

<p class="forward">基督徒常是大罪不敢犯，小罪却不断。过着属肉体的生活，经常在痛苦中挣扎。虽然有圣灵在内，却没有受圣灵充满，事奉就没有能力。要复兴就当彻底认罪，奉献给主，分别为圣，领受圣灵的充满，支取从上面来的能力，随从圣灵而行，便会连小罪也少犯。</p>

<h2 class="forward">2. 奉主名受浸（<span class="popup-link" @click = "popUp('pop57')"> 徒2:38</span>）</h2>

<div class="popup invisible" id="pop57"><!-- begin bible -->
<p><sup class="versenum">38&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;你们各人要悔改，奉耶稣基督的名受洗，叫你们的罪得赦，就必领受所赐的圣灵。</p>
<!-- end bible --></div>

<ul>
	<li class="nobreak-final-final">受浸是奉主耶稣的名执行的，表示一个人承认主耶稣为弥赛亚（<span class="popup-link" @click = "popUp('pop21')"> 徒22:16</span>），

	<div class="popup invisible" id="pop21"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>现在你为什么耽延呢？起来，求告他的名受洗，洗去你的罪！&rsquo;</p>
	<!-- end bible --></div>
	归入主的名下（<span class="popup-link" @click = "popUp('pop22')"> 徒15:17</span>）。

	<div class="popup invisible" id="pop22"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>叫余剩的人，就是凡称为我名下的外邦人，都寻求主。</p>
	<!-- end bible --></div>
	浸礼乃是外面的表号，是公开承认主耶稣为其救主。施洗约翰的浸礼，乃是外在的水礼来表明其内心的悔改（<span class="popup-link" @click = "popUp('pop23')"> 可1:4</span>；

	<div class="popup invisible" id="pop23"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>照这话，<u class="person underline">约翰</u>来了，在旷野施洗，传悔改的洗礼，使罪得赦。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop24')"> 徒13:24</span>，

	<div class="popup invisible" id="pop24"><!-- begin bible -->
	<p><sup class="versenum">24&nbsp;</sup>&ldquo;在他没有出来以先，<u class="person underline">约翰</u>向以色列众民宣讲悔改的洗礼。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop25')"> 徒18:25</span>，

	<div class="popup invisible" id="pop25"><!-- begin bible -->
	<p><sup class="versenum">25&nbsp;</sup>这人已经在主的道上受了教训，心里火热，将耶稣的事详细讲论教训人，只是他单晓得<u class="person underline">约翰</u>的洗礼。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop26')"> 徒19:3</span>），

	<div class="popup invisible" id="pop26"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup><u class="person underline">保罗</u>说：&ldquo;这样，你们受的是什么洗呢？&rdquo;他们说：&ldquo;是<u class="person underline">约翰</u>的洗。&rdquo;</p>
	<!-- end bible --></div>
	只不过是影儿。现在奉主耶稣的名，乃是实体，以前是水浸，现在是用灵浸。外在的礼仪若不配含内心真诚的悔改，是毫无价值的。布鲁斯博士（F.F. Bruce）说：&ldquo;领受圣灵在此与浸礼本身有关，乃是以浸礼作为可见之悔改的象征关联。&rdquo;</li>
	<li class="nobreak-final-final">一个若没有真心悔改信主，就是受过水礼，仍旧是没有得救，没有受圣灵。水礼本身不能给人救恩，也不能直接洗净人的罪。我们乃是藉着十字架的主耶稣得救，因他的宝血洗净我们的一切的罪（<span class="popup-link" @click = "popUp('pop27')"> 约壹1:7</span>）
	<div class="popup invisible" id="pop27"><!-- begin bible -->
	<p><sup class="versenum">7&nbsp;</sup>我们若在光明中行，如同神在光明中，就彼此相交，他儿子耶稣的血也洗净我们一切的罪。</p>
	<!-- end bible --></div>
	。人因重生才能领受灵的洗，水礼乃是一种真心悔改的外在行为表征。重要的是奉耶稣基督的名，归入主的名，才能与圣灵有份。</li>
</ul>

<h2 class="forward">3. 领受圣灵（<span class="popup-link" @click = "popUp('pop58')"> 徒2:38</span>）</h2>

<div class="popup invisible" id="pop58"><!-- begin bible -->
<p><sup class="versenum">38&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;你们各人要悔改，奉耶稣基督的名受洗，叫你们的罪得赦，就必领受所赐的圣灵。</p>
<!-- end bible --></div>

<ul>
	<li class="nobreak-final-final">&ldquo;领受所赐的圣灵&rdquo;，神所赐的是圣灵本身。主曾应许赐给我们圣灵（<span class="popup-link" @click = "popUp('pop28')"> 约14:16</span>，

	<div class="popup invisible" id="pop28"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>&ldquo;我要求父，父就另外赐给你们一位保惠师，叫他永远与你们同在，</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop29')"> 约14:26-27</span>）。

	<div class="popup invisible" id="pop29"><!-- begin bible -->
	<p><sup class="versenum">26&nbsp;</sup>但保惠师，就是父因我的名所要差来的圣灵，他要将一切的事指教你们，并且要叫你们想起我对你们所说的一切话。<sup class="versenum">27&nbsp;</sup>我留下平安给你们，我将我的平安赐给你们。我所赐的不像世人所赐的，你们心里不要忧愁，也不要胆怯。</p>
	<!-- end bible --></div>
	布鲁斯博士说：&ldquo;我们必须分辨所赐的圣灵和圣灵的恩赐。所赐的圣灵是圣灵本身由父藉着弥赛亚所赐的；圣灵的恩赐是那些灵赐的特别才能，&lsquo;随己意分给各人的&rsquo;（<span class="popup-link" @click = "popUp('pop30')"> 林前12:11</span>）。&rdquo;

	<div class="popup invisible" id="pop30"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>这一切都是这位圣灵所运行，随己意分给各人的。</p>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">所以我们受圣灵充满，不是以恩赐为中心，乃是以圣灵为主。更不能以说方言为圣灵充满之证据。主耶稣受圣灵充满并没有说方言（<span class="popup-link" @click = "popUp('pop31')"> 太3:16-17</span>），
	<div class="popup invisible" id="pop31"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>耶稣受了洗，随即从水里上来。天忽然为他开了，他就看见神的灵仿佛鸽子降下，落在他身上；<sup class="versenum">17&nbsp;</sup>从天上有声音说：&ldquo;这是我的爱子，我所喜悦的。&rdquo;</p>
	<!-- end bible --></div>
	也不能说说方言是圣灵洗的凭据；也不能说第一次受圣灵的洗必须说方言。受圣灵充满是圣灵为主，不是恩赐。属灵的恩赐是圣灵随己意赐给信徒的，是为成全圣徒，建立基督的身体，达到事奉的目的（罗12章，弗4章，彼前4章，林前12章）。不是每一个人都有恩赐，也不是每一个都得全部的恩赐。乃是恩赐按照己意运行，不必有人意来掺杂。教会不能以恩赐为教义，若以恩赐为教义势必引起分裂，这是信徒当警惕的。</li>
</ul>

<p class="forward">我们必须被圣灵充满，站在事奉的岗位上，所须要的恩赐，圣灵会按照其心意来成就。</p>

<h2 class="forward">4. 神的应许（<span class="popup-link" @click = "popUp('pop59')"> 徒2:38</span>）</h2>

<div class="popup invisible" id="pop59"><!-- begin bible -->
<p><sup class="versenum">38&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;你们各人要悔改，奉耶稣基督的名受洗，叫你们的罪得赦，就必领受所赐的圣灵。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

<ul>
	<li class="nobreak-final-final">我们领受圣灵是藉着福音的应许，这福音的应许也是神与以色列人立约的应许，神的灵必与人同在（<span class="popup-link" @click = "popUp('pop32')"> 赛32:15</span>；

	<div class="popup invisible" id="pop32"><!-- begin bible -->
	<p><sup class="versenum">15&nbsp;</sup>等到圣灵从上浇灌我们，旷野就变为肥田，肥田看如树林。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop60')"> 耶31:31-34</span>；

	<div class="popup invisible" id="pop60"><!-- begin bible -->
	<p><sup class="versenum">31&nbsp;</sup>耶和华说：&ldquo;日子将到，我要与以色列家和犹大家另立新约。<sup class="versenum">32&nbsp;</sup>不像我拉着他们祖宗的手领他们出埃及地的时候，与他们所立的约，我虽做他们的丈夫，他们却背了我的约。&rdquo;这是耶和华说的。<sup class="versenum">33&nbsp;</sup>耶和华说：&ldquo;那些日子以后，我与以色列家所立的约乃是这样：我要将我的律法放在他们里面，写在他们心上；我要做他们的神，他们要做我的子民。<sup class="versenum">34&nbsp;</sup>他们各人不再教导自己的邻舍和自己的弟兄说&lsquo;你该认识耶和华&rsquo;，因为他们从最小的到至大的都必认识我。我要赦免他们的罪孽，不再记念他们的罪恶。&rdquo;这是耶和华说的。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop34')"> 结36:25-27</span>；

	<div class="popup invisible" id="pop34"><!-- begin bible -->
	<p><sup class="versenum">25&nbsp;</sup>我必用清水洒在你们身上，你们就洁净了。我要洁净你们，使你们脱离一切的污秽，弃掉一切的偶像。</p>

	<p><sup class="versenum">26&nbsp;</sup>&lsquo;我也要赐给你们一个新心，将新灵放在你们里面，又从你们的肉体中除掉石心，赐给你们肉心。<sup class="versenum">27&nbsp;</sup>我必将我的灵放在你们里面，使你们顺从我的律例，谨守遵行我的典章。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop61')"> 亚12:10</span>&nbsp;），

	<div class="popup invisible" id="pop61"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup>&ldquo;我必将那施恩叫人恳求的灵浇灌<u class="person underline">大卫</u>家和<span class="double-underline place">耶路撒冷</span>的居民。他们必仰望我，就是他们所扎的；必为我悲哀，如丧独生子；又为我愁苦，如丧长子。</p>
	<!--end of footnotes--><!-- end bible --></div>
	&ldquo;&hellip;&hellip;..我要将我的灵浇灌你的后裔，将我的福浇灌你的子孙&rdquo;（<span class="popup-link" @click = "popUp('pop36')"> 赛44:3</span>）。

	<div class="popup invisible" id="pop36"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>因为我要将水浇灌口渴的人，将河浇灌干旱之地，我要将我的灵浇灌你的后裔，将我的福浇灌你的子孙。</p>
	<!-- end bible --></div>
	&ldquo;我必将我的灵放在你们里面，你们就要活了&hellip;&hellip;.&rdquo;（<span class="popup-link" @click = "popUp('pop37')"> 结37:14</span>）。

	<div class="popup invisible" id="pop37"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>我必将我的灵放在你们里面，你们就要活了。我将你们安置在本地，你们就知道我耶和华如此说，也如此成就了。这是耶和华说的。&rsquo;&rdquo;</p>
	<!-- end bible --></div>
	彼得证道时曾引用约珥先知的预言（<span class="popup-link" @click = "popUp('pop38')"> 徒2:17-21</span>），

	<div class="popup invisible" id="pop38"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>&lsquo;神说：在末后的日子，我要将我的灵浇灌凡有血气的，你们的儿女要说预言，你们的少年人要见异象，老年人要做异梦。<sup class="versenum">18&nbsp;</sup>在那些日子，我要将我的灵浇灌我的仆人和使女，他们就要说预言。<sup class="versenum">19&nbsp;</sup>在天上我要显出奇事，在地下我要显出神迹，有血，有火，有烟雾。<sup class="versenum">20&nbsp;</sup>日头要变为黑暗，月亮要变为血，这都在主大而明显的日子未到以前。<sup class="versenum">21&nbsp;</sup>到那时候，凡求告主名的，就必得救。&rsquo;</p>
	<!-- end bible --></div>
	凡求告主名的就必得救。这福音的应许不但给当时的人，也给他们的儿女，并一切远方的人，就是主我们的神所招来的。这表明福音是普世性的（<span class="popup-link" @click = "popUp('pop39')"> 太24:14</span>；

	<div class="popup invisible" id="pop39"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>这天国的福音要传遍天下，对万民作见证，然后末期才来到。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop40')"> 徒22:21</span>；

	<div class="popup invisible" id="pop40"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>主向我说：&lsquo;你去吧！我要差你远远地往外邦人那里去。&rsquo;&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop41')"> 弗2:13</span>，

	<div class="popup invisible" id="pop41"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>你们从前远离神的人，如今却在基督耶稣里，靠着他的血，已经得亲近了。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop42')"> 弗2:17</span>），

	<div class="popup invisible" id="pop42"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>并且来传和平的福音给你们远处的人，也给那近处的人；</p>
	<!-- end bible --></div>
	是不受种族政权、地域之限制，神愿意万人得救，不愿一人沉沦。这并不是&ldquo;普世得救论&rdquo;，乃是凡真心悔改，求告主名的人，藉着福音的应许，必领受所应许的圣灵。</li>
	<li class="nobreak-final-final">我们凭信心被圣灵充满。满有圣灵充满保罗对加拉太信徒说：&ldquo;我只要问你们这一件：你们受了圣灵，是因行律法呢？是因听信福音呢？&rdquo;（<span class="popup-link" @click = "popUp('pop43')"> 加3:2</span>）
	<div class="popup invisible" id="pop43"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>我只要问你们这一件：你们受了圣灵，是因行律法呢，是因听信福音呢？</p>
	<!-- end bible --></div>
	使徒保罗对以弗所的信徒说：&ldquo;你们既听见真理的道，就是那叫你们得救的福音，也信了基督，然信他，就受了所应许的圣灵为印记。&rdquo;（<span class="popup-link" @click = "popUp('pop44')"> 弗1:13</span>）

	<div class="popup invisible" id="pop44"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>你们既听见真理的道，就是那叫你们得救的福音，也信了基督，既然信他，就受了所应许的圣灵为印记。</p>
	<!-- end bible --></div>
	我们若真心悔改，必把肢体献上为神而话，做义的器具（<span class="popup-link" @click = "popUp('pop45')"> 罗6:13</span>，

	<div class="popup invisible" id="pop45"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>也不要将你们的肢体献给罪做不义的器具，倒要像从死里复活的人，将自己献给神，并将肢体做义的器具献给神。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop46')"> 罗6:19</span>），

	<div class="popup invisible" id="pop46"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>我因你们肉体的软弱，就照人的常话对你们说：你们从前怎样将肢体献给不洁、不法做奴仆，以至于不法；现今也要照样将肢体献给义做奴仆，以至于成圣。</p>
	<!-- end bible --></div>
	并将身体献上为神而活，忠心事奉（<span class="popup-link" @click = "popUp('pop47')"> 罗12:1-2</span>）。

	<div class="popup invisible" id="pop47"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>所以弟兄们，我以神的慈悲劝你们，将身体献上，当做活祭，是圣洁的，是神所喜悦的，你们如此侍奉乃是理所当然的。<sup class="versenum">2&nbsp;</sup>不要效法这个世界，只要心意更新而变化，叫你们察验何为神的善良、纯全、可喜悦的旨意。</p>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">我们凭信心被圣灵充满乃是根据神的命令（<span class="popup-link" @click = "popUp('pop48')"> 弗5:18</span>），
	<div class="popup invisible" id="pop48"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>不要醉酒，酒能使人放荡；乃要被圣灵充满。</p>
	<!-- end bible --></div>
	根据神的应许（<span class="popup-link" @click = "popUp('pop49')"> 徒2:39</span>），

	<div class="popup invisible" id="pop49"><!-- begin bible -->
	<p><sup class="versenum">39&nbsp;</sup>因为这应许是给你们和你们的儿女，并一切在远方的人，就是主我们神所召来的。&rdquo;</p>
	<!-- end bible --></div>
	根据神旨意（<span class="popup-link" @click = "popUp('pop50')"> 约壹5:14-15</span>）

	<div class="popup invisible" id="pop50"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>我们若照他的旨意求什么，他就听我们，这是我们向他所存坦然无惧的心。<sup class="versenum">15&nbsp;</sup>既然知道他听我们一切所求的，就知道我们所求于他的，无不得着。</p>
	<!-- end bible --></div>
	求的。我们是根据神的话作权威，而不是靠感觉。感觉的经验是个人的。它不是根据，也不是原则，更不是权威。我们尊重别人的感觉经验，但千万不要模仿别人的经验。被圣灵充满可能有感觉，也可能毫无感觉。但是不要注重感觉或寻求感觉，乃是要寻求神的话，相信神的话，根据神的话。&ldquo;信心&rdquo;是与神发生属灵关系的转折点。</li>
</ul>

<p class="forward">若你渴慕，肯被圣灵充满，神岂不按照他福音应许的旨意成就吗？</p>

<h2 class="forward">建议</h2>

<ol>
	<li class="forward">如果你尚未被圣灵充满，请找一个安静的地方，好好地认罪，而且相信神赦免你一切的罪（<span class="popup-link" @click = "popUp('pop51')"> 约壹1:9</span>），

	<div class="popup invisible" id="pop51"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>我们若认自己的罪，神是信实的，是公义的，必要赦免我们的罪，洗净我们一切的不义。</p>
	<!-- end bible --></div>
	凭信心求主以圣灵充满你。</li>
	<li class="forward">如果你已被圣灵充满，请写出你的见证并与人分享。</li>
	<li class="forward">请与其他基督朋友分享这篇信息。</li>
</ol>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->