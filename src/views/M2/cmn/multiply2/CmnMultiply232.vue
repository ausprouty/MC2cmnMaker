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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>32.</h1></div>
                        <div class="chapter_title ltr"><h1>领导力与信心</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路7:47-48</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">47&nbsp;</sup>所以我告诉你：她许多的罪都赦免了，因为她的爱多；但那赦免少的，他的爱就少。&rdquo;<sup class="versenum">48&nbsp;</sup>于是对那女人说：&ldquo;你的罪赦免了！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">圣灵在我们身边的人心中积极地动工，祂显明人的罪、使人渴望与上帝和好、让人不再害怕死亡，并拆毁人心中对福音的反抗（<span class="popup-link" @click = "popUp('pop2')"> 约16</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>&ldquo;我已将这些事告诉你们，使你们不至于跌倒。<sup class="versenum">2&nbsp;</sup>人要把你们赶出会堂，并且时候将到，凡杀你们的就以为是侍奉神。<sup class="versenum">3&nbsp;</sup>他们这样行，是因未曾认识父，也未曾认识我。<sup class="versenum">4&nbsp;</sup>我将这事告诉你们，是叫你们到了时候，可以想起我对你们说过了。我起先没有将这些事告诉你们，因为我与你们同在。<sup class="versenum">5&nbsp;</sup>现今我往差我来的父那里去，你们中间并没有人问我：&lsquo;你往哪里去？&rsquo;<sup class="versenum">6&nbsp;</sup>只因我将这事告诉你们，你们就满心忧愁。<sup class="versenum">7&nbsp;</sup>然而我将真情告诉你们，我去是于你们有益的。我若不去，保惠师就不到你们这里来；我若去，就差他来。<sup class="versenum">8&nbsp;</sup>他既来了，就要叫世人为罪、为义、为审判，自己责备自己。<sup class="versenum">9&nbsp;</sup>为罪，是因他们不信我；<sup class="versenum">10&nbsp;</sup>为义，是因我往父那里去，你们就不再见我；<sup class="versenum">11&nbsp;</sup>为审判，是因这世界的王受了审判。</p>

	<h3>主要引导门徒进入真理</h3>

	<p><sup class="versenum">12&nbsp;</sup>&ldquo;我还有好些事要告诉你们，但你们现在担当不了。<sup class="versenum">13&nbsp;</sup>只等真理的圣灵来了，他要引导你们明白一切的真理，因为他不是凭自己说的，乃是把他所听见的都说出来，并要把将来的事告诉你们。<sup class="versenum">14&nbsp;</sup>他要荣耀我，因为他要将受于我的告诉你们。<sup class="versenum">15&nbsp;</sup>凡父所有的，都是我的，所以我说，他要将受于我的告诉你们。<sup class="versenum">16&nbsp;</sup>等不多时，你们就不得见我；再等不多时，你们还要见我。&rdquo;<sup class="versenum">17&nbsp;</sup>有几个门徒就彼此说：&ldquo;他对我们说&lsquo;等不多时，你们就不得见我；再等不多时，你们还要见我&rsquo;，又说&lsquo;因我往父那里去&rsquo;，这是什么意思呢？&rdquo;<sup class="versenum">18&nbsp;</sup>门徒彼此说：&ldquo;他说&lsquo;等不多时&rsquo;，到底是什么意思呢？我们不明白他所说的话。&rdquo;<sup class="versenum">19&nbsp;</sup>耶稣看出他们要问他，就说：&ldquo;我说&lsquo;等不多时，你们就不得见我；再等不多时，你们还要见我&rsquo;，你们为这话彼此相问吗？<sup class="versenum">20&nbsp;</sup>我实实在在地告诉你们：你们将要痛哭、哀号，世人倒要喜乐。你们将要忧愁，然而你们的忧愁要变为喜乐。<sup class="versenum">21&nbsp;</sup>妇人生产的时候就忧愁，因为她的时候到了；既生了孩子，就不再记念那苦楚，因为欢喜世上生了一个人。<sup class="versenum">22&nbsp;</sup>你们现在也是忧愁，但我要再见你们，你们的心就喜乐了，这喜乐也没有人能夺去。</p>

	<p><sup class="versenum">23&nbsp;</sup>&ldquo;到那日，你们什么也就不问我了。我实实在在地告诉你们：你们若向父求什么，他必因我的名赐给你们。<sup class="versenum">24&nbsp;</sup>向来你们没有奉我的名求什么，如今你们求，就必得着，叫你们的喜乐可以满足。</p>

	<p><sup class="versenum">25&nbsp;</sup>&ldquo;这些事，我是用比喻对你们说的。时候将到，我不再用比喻对你们说，乃要将父明明地告诉你们。<sup class="versenum">26&nbsp;</sup>到那日，你们要奉我的名祈求。我并不对你们说，我要为你们求父；<sup class="versenum">27&nbsp;</sup>父自己爱你们，因为你们已经爱我，又信我是从父出来的。<sup class="versenum">28&nbsp;</sup>我从父出来，到了世界；我又离开世界，往父那里去。&rdquo;<sup class="versenum">29&nbsp;</sup>门徒说：&ldquo;如今你是明说，并不用比喻了。<sup class="versenum">30&nbsp;</sup>现在我们晓得你凡事都知道，也不用人问你，因此我们信你是从神出来的。&rdquo;<sup class="versenum">31&nbsp;</sup>耶稣说：&ldquo;现在你们信吗？<sup class="versenum">32&nbsp;</sup>看哪，时候将到，且是已经到了，你们要分散，各归自己的地方去，留下我独自一人；其实我不是独自一人，因为有父与我同在。<sup class="versenum">33&nbsp;</sup>我将这些事告诉你们，是要叫你们在我里面有平安。在世上你们有苦难，但你们可以放心，我已经胜了世界。&rdquo;</p>
	<!-- end bible --></div>
	而我们的工作是藉由见证的方式找到那些对福音敞开的人，并让他们认识基督。我们应当互相提醒并彼此鼓励：&ldquo;圣灵在我们行动以前，就在人的心里动工&rdquo;。让我们去，凭信心寻见神已预备好的人，把他们带到神的面前，得享神所预备丰盛与永恒的生命。</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final" style="text-align:justify"><span><span><span lang="ZH-CN">耶稣整日坐在船上教训站在岸边的群众</span><span lang="ZH-CN"><span>（</span></span></span></span><span class="popup-link" @click = "popUp('pop3')"> 马可福音4:1-34</span><span lang="ZH-CN"><span>）</span></span><span lang="ZH-CN">，</span>
	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<h3>撒种的比喻</h3>

	<p><sup class="versenum">1 </sup>耶稣又在海边教训人。有许多人到他那里聚集，他只得上船坐下。船在海里，众人都靠近海，站在岸上。<sup class="versenum">2&nbsp;</sup>耶稣就用比喻教训他们许多道理。在教训之间，对他们说：<sup class="versenum">3&nbsp;</sup>&ldquo;你们听啊！有一个撒种的出去撒种。<sup class="versenum">4&nbsp;</sup>撒的时候，有落在路旁的，飞鸟来吃尽了。<sup class="versenum">5&nbsp;</sup>有落在土浅石头地上的，土既不深，发苗最快，<sup class="versenum">6&nbsp;</sup>日头出来一晒，因为没有根，就枯干了。<sup class="versenum">7&nbsp;</sup>有落在荆棘里的，荆棘长起来，把它挤住了，就不结实。<sup class="versenum">8&nbsp;</sup>又有落在好土里的，就发生长大，结实有三十倍的，有六十倍的，有一百倍的。&rdquo;<sup class="versenum">9&nbsp;</sup>又说：&ldquo;有耳可听的，就应当听！&rdquo;</p>

	<h3>用比喻的因由</h3>

	<p><sup class="versenum">10&nbsp;</sup>无人的时候，跟随耶稣的人和十二个门徒问他这比喻的意思。<sup class="versenum">11&nbsp;</sup>耶稣对他们说：&ldquo;神国的奥秘只叫你们知道，若是对外人讲，凡事就用比喻，<sup class="versenum">12&nbsp;</sup>叫&lsquo;他们看是看见，却不晓得，听是听见，却不明白；恐怕他们回转过来，就得赦免&rsquo;。&rdquo;</p>

	<h3>解明撒种的比喻</h3>

	<p><sup class="versenum">13&nbsp;</sup>又对他们说：&ldquo;你们不明白这比喻吗？这样怎能明白一切的比喻呢？<sup class="versenum">14&nbsp;</sup>撒种之人所撒的就是道。<sup class="versenum">15&nbsp;</sup>那撒在路旁的，就是人听了道，<u class="person underline">撒旦</u>立刻来，把撒在他心里的道夺了去。<sup class="versenum">16&nbsp;</sup>那撒在石头地上的，就是人听了道，立刻欢喜领受，<sup class="versenum">17&nbsp;</sup>但他心里没有根，不过是暂时的，及至为道遭了患难，或是受了逼迫，立刻就跌倒了。<sup class="versenum">18&nbsp;</sup>还有那撒在荆棘里的，就是人听了道，<sup class="versenum">19&nbsp;</sup>后来有世上的思虑、钱财的迷惑和别样的私欲进来，把道挤住了，就不能结实。<sup class="versenum">20&nbsp;</sup>那撒在好地上的，就是人听道又领受，并且结实，有三十倍的，有六十倍的，有一百倍的。&rdquo;</p>

	<p><sup class="versenum">21&nbsp;</sup>耶稣又对他们说：&ldquo;人拿灯来，岂是要放在斗底下、床底下，不放在灯台上吗？<sup class="versenum">22&nbsp;</sup>因为掩藏的事没有不显出来的，隐瞒的事没有不露出来的。<sup class="versenum">23&nbsp;</sup>有耳可听的，就应当听！&rdquo;<sup class="versenum">24&nbsp;</sup>又说：&ldquo;你们所听的要留心。你们用什么量器量给人，也必用什么量器量给你们，并且要多给你们。<sup class="versenum">25&nbsp;</sup>因为有的，还要给他；没有的，连他所有的也要夺去。&rdquo;</p>

	<p><sup class="versenum">26&nbsp;</sup>又说：&ldquo;神的国如同人把种撒在地上，<sup class="versenum">27&nbsp;</sup>黑夜睡觉，白日起来，这种就发芽渐长，那人却不晓得如何这样。<sup class="versenum">28&nbsp;</sup>地生五谷是出于自然的，先发苗，后长穗，再后穗上结成饱满的子粒。<sup class="versenum">29&nbsp;</sup>谷既熟了，就用镰刀去割，因为收成的时候到了。&rdquo;</p>

	<p><sup class="versenum">30&nbsp;</sup>又说：&ldquo;神的国，我们可用什么比较呢？可用什么比喻表明呢？<sup class="versenum">31&nbsp;</sup>好像一粒芥菜种，种在地里的时候，虽比地上的百种都小，<sup class="versenum">32&nbsp;</sup>但种上以后，就长起来，比各样的菜都大，又长出大枝来，甚至天上的飞鸟可以宿在它的荫下。&rdquo;</p>

	<p><sup class="versenum">33&nbsp;</sup>耶稣用许多这样的比喻，照他们所能听的，对他们讲道。<sup class="versenum">34&nbsp;</sup>若不用比喻，就不对他们讲；没有人的时候，就把一切的道讲给门徒听。</p>
	<!-- end bible --></div>
	<span lang="ZH-CN">到了晚上，他吩咐门徒把船渡到海的另一边去。</span></li>
</ul>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马可福音4:35-41》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马可福音4:35-41</button><div class="collapsed" id ="Text0">

<p><sup>35</sup>当那天晚上，耶稣对门徒说：&ldquo;我们渡到那边去吧。&rdquo;<sup>36</sup>门徒离开众人，耶稣仍在船上，他们就把他一同带去，也有别的船和他同行。<sup>37</sup>忽然起了暴风，波浪打入船内，甚至船要满了水。<sup>38</sup>耶稣在船尾上，枕着枕头睡觉。门徒叫醒了他，说：&ldquo;夫子！我们丧命，你不顾吗？&rdquo;<sup>39</sup>耶稣醒了，斥责风，向海说：&ldquo;住了吧！静了吧！&rdquo;风就止住，大大地平静了。<sup>40</sup>耶稣对他们说：&ldquo;为什么胆怯，你们还没有信心吗？&rdquo;<sup>41</sup>他们就大大的惧怕，彼此说：&ldquo;这到底是谁，连风和海也听从他了。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/232.mp4" type="button" class="external-movie">
         观看&nbsp;马可福音4:35-41&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣怎样向门徒示范生活和事奉，作属神的领袖？</li>
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
		<li class="up">再读一次这段故事。请小组中一个人口头讲述这故事，并根据需要作更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<ul>
	
	<li class="nobreak-final-final">随着事工不断扩展，耶稣很难找到一个不被打扰的地方休息。湖上有暴风雨时，祂却累地在船上睡着了！是的，耶稣和我们一样会感到疲惫。祂是完全的人，和祂的受造物一样（<span class="popup-link" @click = "popUp('pop4')"> 来2:17</span>）。
	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>所以，他凡事该与他的弟兄相同，为要在神的事上成为慈悲忠信的大祭司，为百姓的罪献上挽回祭。</p>
	<!-- end bible --></div>
	祂用加利利湖作为远避人群与门徒一起休息的地方。就在狂风暴雨把水打入船内时，这群新领袖开始害怕起来，大声呼叫耶稣来救命。祂就责问门徒还没有信心吗？耶稣不是期待他们平静风浪，而是要门徒相信祂不会让灾害临到他们。</li>
	<li class="nobreak-final-final">（进深学习：<span class="popup-link" @click = "popUp('pop5')"> 路加福音8:22-25</span>；
	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">22&nbsp;</sup>有一天，耶稣和门徒上了船，对门徒说：&ldquo;我们可以渡到湖那边去。&rdquo;他们就开了船。<sup class="versenum">23&nbsp;</sup>正行的时候，耶稣睡着了。湖上忽然起了暴风，船将满了水，甚是危险。<sup class="versenum">24&nbsp;</sup>门徒来叫醒了他，说：&ldquo;夫子！夫子！我们丧命啦！&rdquo;耶稣醒了，斥责那狂风大浪，风浪就止住，平静了。<sup class="versenum">25&nbsp;</sup>耶稣对他们说：&ldquo;你们的信心在哪里呢？&rdquo;他们又惧怕又稀奇，彼此说：&ldquo;这到底是谁？他吩咐风和水，连风和水也听从他了！&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop6')"> 马太福音8:18-27</span>）

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>耶稣见许多人围着他，就吩咐渡到那边去。<sup class="versenum">19&nbsp;</sup>有一个文士来对他说：&ldquo;夫子，你无论往哪里去，我要跟从你。&rdquo;<sup class="versenum">20&nbsp;</sup>耶稣说：&ldquo;狐狸有洞，天空的飞鸟有窝，人子却没有枕头的地方。&rdquo;<sup class="versenum">21&nbsp;</sup>又有一个门徒对耶稣说：&ldquo;主啊，容我先回去埋葬我的父亲。&rdquo;<sup class="versenum">22&nbsp;</sup>耶稣说：&ldquo;任凭死人埋葬他们的死人，你跟从我吧！&rdquo;</p>

	<p><sup class="versenum">23&nbsp;</sup>耶稣上了船，门徒跟着他。<sup class="versenum">24&nbsp;</sup>海里忽然起了暴风，甚至船被波浪掩盖，耶稣却睡着了。<sup class="versenum">25&nbsp;</sup>门徒来叫醒了他，说：&ldquo;主啊，救我们，我们丧命啦！&rdquo;<sup class="versenum">26&nbsp;</sup>耶稣说：&ldquo;你们这小信的人哪！为什么胆怯呢？&rdquo;于是起来，斥责风和海，风和海就大大地平静了。<sup class="versenum">27&nbsp;</sup>众人稀奇，说：&ldquo;这是怎样的人？连风和海也听从他了！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">可4:39-40</p>

<p class="forward bible"><sup>39</sup>耶稣醒了，斥责风，向海说：&ldquo;住了吧！静了吧！&rdquo;风就止住，大大地平静了。<sup>40</sup>耶稣对他们说：&ldquo;为什么胆怯，你们还没有信心吗？&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">因为犹太信仰传统中，大水、风浪、黑夜、混乱代表邪恶的力量，而上帝是创造者，他坐在大水上作王、平静风浪、建立次序、驱逐黑暗。（参<span class="popup-link" @click = "popUp('pop7')"> 拿1</span>章；

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<div>
	<div>
	<div>
	<div>
	<div>
	<div>
	<h3>约拿奉遣赴尼尼微</h3>

	<p><sup class="versenum">1 </sup>耶和华的话临到<u class="person underline">亚米太</u>的儿子<u class="person underline">约拿</u>说：<sup class="versenum">2&nbsp;</sup>&ldquo;你起来，往尼尼微大城去，向其中的居民呼喊，因为他们的恶达到我面前。&rdquo;</p>

	<h3>违命避往他施</h3>

	<p><sup class="versenum">3&nbsp;</sup><u class="person underline">约拿</u>却起来，逃往他施去躲避耶和华。下到约帕，遇见一只船要往他施去，他就给了船价，上了船，要与船上的人同往他施去，躲避耶和华。</p>

	<h3>海风大起舟人惊惧各吁其神</h3>

	<p><sup class="versenum">4&nbsp;</sup>然而耶和华使海中起大风，海就狂风大作，甚至船几乎破坏。<sup class="versenum">5&nbsp;</sup>水手便惧怕，各人哀求自己的神。他们将船上的货物抛在海中，为要使船轻些。<u class="person underline">约拿</u>已下到底舱，躺卧沉睡。<sup class="versenum">6&nbsp;</sup>船主到他那里，对他说：&ldquo;你这沉睡的人哪，为何这样呢？起来，求告你的神！或者神顾念我们，使我们不致灭亡。&rdquo;<sup class="versenum">7&nbsp;</sup>船上的人彼此说：&ldquo;来吧，我们掣签，看看这灾临到我们是因谁的缘故。&rdquo;于是他们掣签，掣出<u class="person underline">约拿</u>来。<sup class="versenum">8&nbsp;</sup>众人对他说：&ldquo;请你告诉我们，这灾临到我们是因谁的缘故？你以何事为业？你从哪里来？你是哪一国，属哪一族的人？&rdquo;<sup class="versenum">9&nbsp;</sup>他说：&ldquo;我是希伯来人，我敬畏耶和华，那创造沧海旱地之天上的神。&rdquo;<sup class="versenum">10&nbsp;</sup>他们就大大惧怕，对他说：&ldquo;你做的是什么事呢！&rdquo;他们已经知道他躲避耶和华，因为他告诉了他们。</p>

	<h3>约拿见投于海</h3>

	<p><sup class="versenum">11&nbsp;</sup>他们问他说：&ldquo;我们当向你怎样行，使海浪平静呢？&rdquo;这话是因海浪越发翻腾。<sup class="versenum">12&nbsp;</sup>他对他们说：&ldquo;你们将我抬起来，抛在海中，海就平静了。我知道你们遭这大风是因我的缘故。&rdquo;<sup class="versenum">13&nbsp;</sup>然而那些人竭力荡桨，要把船拢岸，却是不能，因为海浪越发向他们翻腾。<sup class="versenum">14&nbsp;</sup>他们便求告耶和华说：&ldquo;耶和华啊，我们恳求你，不要因这人的性命使我们死亡，不要使流无辜血的罪归于我们，因为你耶和华是随自己的意旨行事。&rdquo;<sup class="versenum">15&nbsp;</sup>他们遂将<u class="person underline">约拿</u>抬起，抛在海中，海的狂浪就平息了。<sup class="versenum">16&nbsp;</sup>那些人便大大敬畏耶和华，向耶和华献祭，并且许愿。</p>

	<p><sup class="versenum">17&nbsp;</sup>耶和华安排一条大鱼吞了<u class="person underline">约拿</u>，他在鱼腹中三日三夜。</p>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop8')"> 创1:1-10</span>；

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>起初，神创造天地。<sup class="versenum">2&nbsp;</sup>地是空虚混沌，渊面黑暗，神的灵运行在水面上。<sup class="versenum">3&nbsp;</sup>神说：&ldquo;要有光。&rdquo;就有了光。<sup class="versenum">4&nbsp;</sup>神看光是好的，就把光暗分开了。<sup class="versenum">5&nbsp;</sup>神称光为昼，称暗为夜。有晚上，有早晨，这是头一日。</p>

	<p><sup class="versenum">6&nbsp;</sup>神说：&ldquo;诸水之间要有空气，将水分为上下。&rdquo;<sup class="versenum">7&nbsp;</sup>神就造出空气，将空气以下的水、空气以上的水分开了。事就这样成了。<sup class="versenum">8&nbsp;</sup>神称空气为天。有晚上，有早晨，是第二日。</p>

	<p><sup class="versenum">9&nbsp;</sup>神说：&ldquo;天下的水要聚在一处，使旱地露出来。&rdquo;事就这样成了。<sup class="versenum">10&nbsp;</sup>神称旱地为地，称水的聚处为海。神看着是好的。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop9')"> 诗65:7</span>&hellip;&hellip;）

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<div>
	<p><sup class="versenum">7&nbsp;</sup>使诸海的响声和其中波浪的响声，并万民的喧哗，都平静了。</p>
	</div>
	<!-- end bible --></div>
	故此，风平浪静的事件，表明是神迹异能，但真正意义是上帝显现&mdash;&mdash;耶稣身份的彰显。这里的行动不只阐明耶稣做了什么，更宣告了耶稣就是神。<span><span><span lang="ZH-CN">在平静风浪的事件中，你对耶稣有什么新的认识？为什么？</span></span></span></li>
	<li class="forward">在你的人生中，曾遭遇怎样的风暴？你如何解决？耶稣是否参与在你人生的路程中？ （或是你现在处在什么人生风暴，你需要耶稣为你做什么？分享并代祷）</li>
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
	<li class="forward">耶稣指出信心不只是他们对耶稣能力的相信和期待，更是他们对耶稣身份的认知和回应。门徒没有充分认识到耶稣有平静风和海的权柄。信心就是信靠神和祂的话，信心来自你对耶稣身份的认识，当你对耶稣的身份认识得越清楚，信心就越大。回想你信主的历程，每个经历帮助你对耶稣有哪些新的认识？为什么？把它们写下，下周在小组里分享。</li>
	<li class="forward">写下你生命中哪些方面容易缺乏信心？为什么？耶稣愿意参与你生命并陪伴你去胜过，而你当做出怎样的改变呢？</li>
	<li class="forward">这周小组可以安排一起探访有需要的弟兄姐妹，为他们祷告，并关心他们实际的需要。求神使用我们成为多人的祝福。</li>
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

<p style="text-align:justify"><span><span><span lang="ZH-CN">亲爱的天父，谢谢祢以恒久忍耐的爱来爱我们。祢没有因我们生命屡次的失败与软弱就丢弃我们。祢一再帮助我们突破生命的软弱与不信，并在祢里面得着更新和成长。感谢祢赐下圣灵保惠师住在我们心里，为我们祷告，并赐我们能力对付生命中各样的罪与不信。祈求天父，在面对人生的各样风浪，我们承认有时候我们会害怕、会胆怯，甚至会退缩，求祢缠拉我们的手，能体验主耶稣的权柄与大能，跨越艰难，生命更像主耶稣。奉主耶稣得胜的名祈求，阿们！</span></span></span></p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->