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
                        <div class="chapter_number ltr"><h1>38.</h1></div>
                        <div class="chapter_title ltr"><h1>得着改变的生命</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 太14:32-33</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">32&nbsp;</sup>他们上了船，风就住了。<sup class="versenum">33&nbsp;</sup>在船上的人都拜他，说：&ldquo;你真是神的儿子了！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>神的心意是愿所有人都认识祂和爱祂。耶稣走遍各城各乡时，祂看到人们的需要，就怜悯他们。祂对门徒说：&ldquo;要收的庄稼多，做工的人少。所以，你们当求庄稼的主打发工人出去收他的庄稼。&rdquo;祂不仅想使用我们，祂也想从我们将要收割的庄稼中，兴起更多的工人。让我们继续求庄稼的主差遣更多的人去带领人来认识祂，而我们自己也成为被差派的人之一，一起有份参与完成大使命！</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">主耶稣指出法利赛人与文士的错误，他们尊重人的遗传，努力行自己所定下外在行为的条例，完全忽视了人内在全然的败坏（<span class="popup-link" @click = "popUp('pop2')"> 马可福音7:18-23</span>），
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>耶稣对他们说：&ldquo;你们也是这样不明白吗？岂不晓得凡从外面进入的，不能污秽人？<sup class="versenum">19&nbsp;</sup>因为不是入他的心，乃是入他的肚腹，又落到茅厕里。&rdquo;这是说，各样的食物都是洁净的。<sup class="versenum">20&nbsp;</sup>又说：&ldquo;从人里面出来的，那才能污秽人。<sup class="versenum">21&nbsp;</sup>因为从里面，就是从人心里发出恶念、苟合、<sup class="versenum">22&nbsp;</sup>偷盗、凶杀、奸淫、贪婪、邪恶、诡诈、淫荡、嫉妒、谤讟、骄傲、狂妄，<sup class="versenum">23&nbsp;</sup>这一切的恶都是从里面出来，且能污秽人。&rdquo;</p>
	<!-- end bible --></div>
	也忽视了神订下律法的精意。他们像旧约所说&ldquo;这百姓用嘴唇尊敬我，心却远离我&rdquo;。他们说信神，却是相反，只信自己。接着主耶稣来到了推罗、西顿等外邦人之地工作。那儿所行的记载不多，好像是特别为一个迦南妇人的女儿来赶鬼。这象征主耶稣不单单是犹太人的救主，祂也是普世的救世主。祂来到地上推展神国，败坏撒但的权势，不单在犹太地，也在外邦人之地。这妇人的信心，博得了主耶稣的赞许，反而那些宗教领袖，还远不如他们所轻视的外邦妇人。回到加利利，耶稣又医治了一个聋哑人并喂饱四千人。</li>
</ul>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马可福音7:31-8:9》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马可福音7:31-8:9</button><div class="collapsed" id ="Text0">

<p><sup>7</sup>:<sup>31</sup>耶稣又离了推罗的境界，经过西顿，就从低加坡里境内来到加利利海。<sup>32</sup>有人带着一个耳聋舌结的人来见耶稣，求他按手在他身上。</p>

<p><sup>33</sup>耶稣领他离开众人，到一边去，就用指头探他的耳朵，吐唾沫抹他的舌头，<sup>34</sup>望天叹息，对他说：&ldquo;以法大！&rdquo;就是说：&ldquo;开了吧！&rdquo;<sup>35</sup>他的耳朵就开了，舌结也解了，说话也清楚了。</p>

<p><sup>36</sup>耶稣嘱咐他们不要告诉人，但他越发嘱咐，他们越发传扬开了。<sup>37</sup>众人分外希奇，说：&ldquo;他所做的事都好，他连聋子也叫他们听见，哑巴也叫他们说话！&rdquo;</p>

<p><sup>8</sup>:<sup>1</sup>那时，又有许多人聚集，并没有什么吃的。耶稣叫门徒来，说：<sup>2</sup>&ldquo;我怜悯这众人，因为他们同我在这里已经三天，也没有吃的了。<sup>3</sup>我若打发他们饿着回家，就必在路上困乏，因为其中有从远处来的。&rdquo;<sup>4</sup>门徒回答说：&ldquo;在这野地，从哪里能得饼，叫这些人吃饱呢？&rdquo;<sup>5</sup>耶稣问他们说：&ldquo;你们有多少饼？&rdquo;他们说：&ldquo;七个。&rdquo;<sup>6</sup>他吩咐众人坐在地上，就拿着这七个饼祝谢了，擘开，递给门徒，叫他们摆开，门徒就摆在众人面前。<sup>7</sup>又有几条小鱼，耶稣祝了福，就吩咐也摆在众人面前。<sup>8</sup>众人都吃，并且吃饱了；收拾剩下的零碎，有七筐子。<sup>9</sup>人数约有四千。耶稣打发他们走了。</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/238.mp4" type="button" class="external-movie">
         观看&nbsp;马可福音7:31-8:9&nbsp;</button>
    <div class="collapsed"></div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><p>+ &nbsp;喂饱四千人的神迹</p></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>有些解经者认为此处喂饱四千人的事件和喂饱五千人的神迹是同一个事件，然而这次的神迹是发生在外邦人的地区，喂饱五千人是发生在犹太人的地区，两者在地理位置和描述的用词上都不一样，将其视为两个不同的事件较合理。</p>

</div>

<p>&nbsp;</p>

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
<div id="Summary1" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="up">耶稣的首要任务是训练、培养未来的宣教领袖。祂带他们离开本地，到北边的推罗、西顿&ldquo;退修&rdquo;，远离事工的压力。然后再回到加利利湖东边的异国领土低加坡里。耶稣曾在这拯救被污鬼附着的人，并差他回去向亲朋好友作见证。自那次以后，这是他们第一次再回到这里。关于耶稣的消息传开，上千人聚集要听道，亲身经历祂的大能。这次和上次众人要耶稣离开的景况差别多么大！整整三天，他们都没有回家睡觉或吃东西。耶稣又再次让领袖学习怜悯众人，并经历祂供应的大能。他们学习到一个生命改变的见证能带领更多人来信主。也在喂饱四千人的神迹当中，看见耶稣对万国的怜悯。</p>

<p class="up">（进深学习： <span class="popup-link" @click = "popUp('pop3')"> 马太福音15:29-38</span>）</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">29&nbsp;</sup>耶稣离开那地方，来到靠近加利利的海边，就上山坐下。<sup class="versenum">30&nbsp;</sup>有许多人到他那里，带着瘸子、瞎子、哑巴、有残疾的和好些别的病人，都放在他脚前，他就治好了他们。<sup class="versenum">31&nbsp;</sup>甚至众人都稀奇，因为看见哑巴说话、残疾的痊愈、瘸子行走、瞎子看见，他们就归荣耀给以色列的神。</p>

<p><sup class="versenum">32&nbsp;</sup>耶稣叫门徒来，说：&ldquo;我怜悯这众人，因为他们同我在这里已经三天，也没有吃的了。我不愿意叫他们饿着回去，恐怕在路上困乏。&rdquo;<sup class="versenum">33&nbsp;</sup>门徒说：&ldquo;我们在这野地，哪里有这么多的饼叫这许多人吃饱呢？&rdquo;<sup class="versenum">34&nbsp;</sup>耶稣说：&ldquo;你们有多少饼？&rdquo;他们说：&ldquo;有七个，还有几条小鱼。&rdquo;<sup class="versenum">35&nbsp;</sup>他就吩咐众人坐在地上，<sup class="versenum">36&nbsp;</sup>拿着这七个饼和几条鱼，祝谢了，掰开，递给门徒，门徒又递给众人。<sup class="versenum">37&nbsp;</sup>众人都吃，并且吃饱了，收拾剩下的零碎，装满了七个筐子。<sup class="versenum">38&nbsp;</sup>吃的人，除了妇女孩子，共有四千。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="forward">可7:36-37</p>

<p class="forward bible"><sup>36</sup>耶稣嘱咐他们不要告诉人，但他越发嘱咐，他们越发传扬开了。<sup>37</sup>众人分外希奇，说：&ldquo;他所做的事都好，他连聋子也叫他们听见，哑巴也叫他们说话！&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">尽管那原先聋哑被医治的人，不听主耶稣的吩咐，引发了大群人们的好奇，跟随主耶稣，马上产生了饭食的问题。耶稣怜悯外邦人的困苦和需要，祂在外邦地区的服事对我们有什么提醒？</li>
	<li class="forward">请比较<span class="popup-link" @click = "popUp('pop4')"> 马可福音8:1-10</span>
	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>那时，又有许多人聚集，并没有什么吃的。耶稣叫门徒来，说：<sup class="versenum">2&nbsp;</sup>&ldquo;我怜悯这众人，因为他们同我在这里已经三天，也没有吃的了。<sup class="versenum">3&nbsp;</sup>我若打发他们饿着回家，就必在路上困乏，因为其中有从远处来的。&rdquo;<sup class="versenum">4&nbsp;</sup>门徒回答说：&ldquo;在这野地，从哪里能得饼叫这些人吃饱呢？&rdquo;<sup class="versenum">5&nbsp;</sup>耶稣问他们说：&ldquo;你们有多少饼？&rdquo;他们说：&ldquo;七个。&rdquo;<sup class="versenum">6&nbsp;</sup>他吩咐众人坐在地上，就拿着这七个饼祝谢了，掰开，递给门徒，叫他们摆开，门徒就摆在众人面前。<sup class="versenum">7&nbsp;</sup>又有几条小鱼，耶稣祝了福，就吩咐也摆在众人面前。<sup class="versenum">8&nbsp;</sup>众人都吃，并且吃饱了，收拾剩下的零碎，有七筐子。<sup class="versenum">9&nbsp;</sup>人数约有四千。耶稣打发他们走了，<sup class="versenum">10&nbsp;</sup>随即同门徒上船，来到大玛努他境内。</p>
	<!-- end bible --></div>
	的神迹，和<span class="popup-link" @click = "popUp('pop5')"> 马可福音6:30-44</span>

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<h3>无牧的羊</h3>

	<p><sup class="versenum">30&nbsp;</sup>使徒聚集到耶稣那里，将一切所做的事、所传的道全告诉他。<sup class="versenum">31&nbsp;</sup>他就说：&ldquo;你们来，同我暗暗地到旷野地方去歇一歇。&rdquo;这是因为来往的人多，他们连吃饭也没有工夫。<sup class="versenum">32&nbsp;</sup>他们就坐船，暗暗地往旷野地方去。<sup class="versenum">33&nbsp;</sup>众人看见他们去，有许多认识他们的，就从各城步行，一同跑到那里，比他们先赶到了。<sup class="versenum">34&nbsp;</sup>耶稣出来，见有许多的人，就怜悯他们，因为他们如同羊没有牧人一般，于是开口教训他们许多道理。<sup class="versenum">35&nbsp;</sup>天已经晚了，门徒进前来说：&ldquo;这是野地，天已经晚了，<sup class="versenum">36&nbsp;</sup>请叫众人散开，他们好往四面乡村里去自己买什么吃。&rdquo;</p>

	<p><sup class="versenum">37&nbsp;</sup>耶稣回答说：&ldquo;你们给他们吃吧！&rdquo;门徒说：&ldquo;我们可以去买二十两银子的饼给他们吃吗？&rdquo;<sup class="versenum">38&nbsp;</sup>耶稣说：&ldquo;你们有多少饼，可以去看看。&rdquo;他们知道了，就说：&ldquo;五个饼，两条鱼。&rdquo;<sup class="versenum">39&nbsp;</sup>耶稣吩咐他们，叫众人一帮一帮地坐在青草地上。<sup class="versenum">40&nbsp;</sup>众人就一排一排地坐下，有一百一排的，有五十一排的。<sup class="versenum">41&nbsp;</sup>耶稣拿着这五个饼、两条鱼，望着天祝福，掰开饼，递给门徒，摆在众人面前，也把那两条鱼分给众人。<sup class="versenum">42&nbsp;</sup>他们都吃，并且吃饱了。<sup class="versenum">43&nbsp;</sup>门徒就把碎饼碎鱼收拾起来，装满了十二个篮子。<sup class="versenum">44&nbsp;</sup>吃饼的男人共有五千。</p>
	<!-- end bible --></div>
	五饼二鱼的神迹有何异同？这些神迹对我们有什么帮助或是反思？为什么？</li>
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
	<li class="forward">与教会弟兄姐妹或是门徒小组一起祷告和计划，如何有效使用神给予教会的恩惠、才干和资源，以爱心怜悯的行动来祝福邻舍和小区。</li>
	<li class="forward">为普世，不同民族及宣教事工持续代祷和奉献。也求神预备你和门徒的心，看到广大禾场的需要，主动参与布道行动和短宣队，一同经历神的同在与能力。</li>
	<li class="forward">与门徒小组计划和筹办福音性聚会，鼓励门徒及弟兄姐妹一起邀请亲友参加。</li>
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

<p>亲爱的天父，我们本是悖逆的，感谢主耶稣的拯救，我们得以认识祢。主耶稣在世上所行的，正是使瞎子看见，瘸子行走，长大麻疯的洁净，聋子听见，死人复活，哑巴能说话，穷人有福音传给他们。主啊，祢来为要拯救失丧的人，让世人得以认识祢独一的救主。我们求主保守我们在祢里面的合一，齐心兴旺福音。求主拓展我们的疆界，开我们的心眼，看到各地福音的需要，有怜悯的心以实际的行动积极参与。我们手中所有的，求主悦纳和使用，福音得以广传，门徒倍增，荣耀主名。奉主耶稣的圣名求，阿们。</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->