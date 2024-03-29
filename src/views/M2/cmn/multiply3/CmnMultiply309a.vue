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
                        <div class="chapter_number ltr"><h1>9.1.</h1></div>
                        <div class="chapter_title ltr"><h1>《宣教士：安乐欢》</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <h2>安乐欢(Leighton P. Rand) 1895~1929</h2>

<ul>
	<li class="nobreak-final-final">安乐欢医生于1895年9月12日生于纽约布碌伦市(Brooklyn, New York)，毕业于纽约州康乃尔大学 (Comell University) 。读书时，他不仅品学兼优，而且是一名体育健将。有感于主耶稣对门徒的吩咐 &quot; 又差遣他们去宣传神国的道，医治病人 &quot;（<span class="popup-link" @click = "popUp('pop1')"> 路9:2</span>）。

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>又差遣他们去宣传神国的道、医治病人，</p>
	<!-- end bible --></div>
	故大学毕业后，再入医学院深造，最终考取医生资格。随即加入中华内地会，受派远赴中国宣教。临别前他写下感言：&quot;如今我去&#39;宣传神国的道，医治病人&#39; 乃是步我主耶稣的后尘。我们曾否体验到，医病是主耶稣三年传道期间主要的工作？衪叫施洗约翰的门徒转告约翰说：&quot;就是瞎子看见，瘸子行走，长大痲疯的洁淨，聋子听见，死人复活，穷人有福音传给他们(<span class="popup-link" @click = "popUp('pop2')"> 路7:22</span>)。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">22&nbsp;</sup>耶稣回答说：&ldquo;你们去，把所看见、所听见的事告诉<u class="person underline">约翰</u>，就是：瞎子看见，瘸子行走，长大麻风的洁净，聋子听见，死人复活，穷人有福音传给他们。</p>
	<!-- end bible --></div>
	...... 还有什么比得上一个基督徒医生，能以身体力行，活出基督的典范呢？ &quot;1924年10月10日，安乐欢以医疗宣教士身份抵达中国。</li>
</ul>

<p>当安乐欢到达中国开始接受语言训练之时，正值中国陷于四分五裂，军阀割据的混乱局面。1925年&quot; 五卅惨案&quot;发生后，全国各地反对帝国主义运动风起云涌，到处举行大规模示威，整个社会动荡不安。安乐欢本来被派往甘肃兰州博德恩医院（Borden Memorial Hospital）工作，但因交通受阻而无法成行，只好暂时留在河南开封福音医院当 助手。一直到是年初冬，他才终于辗转到达博德恩医院就职。</p>

<p>博德恩医院由内地会宣教士金品三医生创建于1915年，经过十年的艰苦经营，已成为中国西北部最好的医院，有舒适的病房、一流的手术室、设备完善的化验室和医护人员的居所。其声名不仅在甘肃，也远播于青海、内蒙古和西藏，连远在拉萨一个喇嘛寺的活佛，都曾不惜长途跋涉，到这里求医问诊。当时医院的人手除了金品三院长和安乐欢外，还有吴宝瑛（Dr. B. Y. Wu）和刘萃赉（ Dr. Liu Shui - lai）两位中国医生。另有 2 0 位医学生和护士，再加上二、三位传道人。除本院工作外，他们还要兼顾城内几个门诊分站，轮流参加巡回医疗队，到外地医病传道。</p>

<p>因为医院办得非常成功，深获官民赞许。在甘肃省长和当地有钱人的捐助下，他们又增建两所分院，一所在兰州市中心建立新的门诊部，另一所在兰州西南约20哩回民聚居地河州（今临夏市）建立的新医院。不久，他们又在城南当地官员赠送一块土地上，兴建起一所痲疯病院，收容数百汉人、回人及藏人病患者。和安乐欢一起到兰州的宣教士海春深夫妇（Mr. &amp; Mrs. G. K. Harris）受派前往主持河州医院 的工作，博德恩医院的四位医生每两个月轮流一次到河州医院协助他们。<br />
医院工作通常十分繁重，平时收治各族平民，战时还要救护伤兵。安乐欢每天与同工们一起行医传道。他们还时常应&quot;基督将军&quot;冯玉祥的邀请，到其军营中布道，使不少军人信主，成为真正的基督徒。病人们听信福音后，多有信主的，其中有些是回民。</p>

<p>1927年3月2 4日国民革命军攻占南京后，不幸发生了&quot;南京事件&quot;，金陵大学副校长文怀恩(John E. Williams)及几位西方传教士被杀。为了保障外侨的安全，欧美等国领事馆下令全面撤侨。金品三院长奉 命率甘肃全省50位传教士和眷属，分乘八艘羊皮筏子沿黄河顺流而下，向中国沿海城市撤退。不幸的是，为抢救搁浅的皮筏子，金品三被卷入漩涡中遇难。</p>

<p>年轻力壮的安乐欢独自留下来，与中国同工一起合力看守医院，并且尽个人所能承担一切院务。1927年5月23日晨，甘肃凉州 (今武威市) 发生大地震，全城大半房屋倒塌，内地会宣教站亦全毁。幸亏当时 大部分宣教士已经撤离，而留守的卜存仁夫妇 (Mr. &amp; Mrs. W. M. Belcher) 亦幸免于难。兰州虽然受到波及，但医院并无损毁，工作如常。</p>

<p>在诸般不幸的消息中，安乐欢也给内地会总部写信报告些好消息，因为地震后不久，博德恩医院又有 1 5 名医学生毕业。安乐欢报告说：&quot;金医生设立这个训练班实有先见之明。他的离去是我们的极大损失，但如今却成了扩张帐幕之地！虽然他们只是实习医生，尚未有正式执照，却已散布各地：有一位留院工作；另一位在城内诊疗所；第三位到河州医院，等候刘医生来接手。有三位到西宁；有两位去伏羌 (今甘谷)；另有两位到岷州(今岷县)；还有两位到狄道(今临洮)及三位去镇原。他们携特少量药品和仪器，拿着福音单张行医兼传道，我深信他们都是热爱灵魂的福音使者&quot;。</p>

<p>安乐欢在7月1日写给痲疯会(Mission to Lepers)的信中，也报告 了麻疯病院的消息：&quot;......金医生遇溺离世，不仅对甘肃省，即使对我们每个人都是极大的损失，尤其那些非常爱他的麻疯病人。......我没有家室缠累，又想到医院如果没有一位外国医生来主持，我们所建立的工作便会损失殆尽，因此我定意留下来。但是照目前出奇的平静看来，当时实在没有撤退的必要。又因奉命撤退太急，金医生没有时间交待好如何管理医院账目，怎样与你们痲疯会联络和交接，以及如何处理我们内地会的事务等等。...... 但也有个好消息： 6月有五位痲疯病 人受洗，其中两位是藏人，一位少女和一位喇嘛。因藏人公开悔改信主极其不易，会受到极大的逼迫，要在恩典里得胜&quot; 。</p>

<p>7月30日，安乐欢在一份简短的报告中提到医院和宣教的情况：&quot;医院一切如常，主大大赐福给我们，特别帮助我们处理几个重症，手术非常成功。已经自立的市中心教会也有16人受洗，其中大部分是在医院听信福音的。吴医生不仅才智双全，并常为主作见证。对我这初到中国，言语困难的人帮助良多。过去数周医院工作比较清闲，又刚好是蜜瓜季节，吴医生我们一起到瓜果市场派单张、卖福音书、唱圣诗和街头佈道。这主意真好，我们就每天清晨5时到7时分批出去传福音。&quot;</p>

<p>9月16日安乐欢给何斯德总干事 (Mr. D. E. Hoste)写信述及回民福音工作情况：&quot;关于第一位在河州信主的回教徒，他来兰州受洗后被逐出河州，只好到别处找工作，同时让妻子回娘家。但因妻子也坚持信主，亦被逐出娘家，却又不能返回夫家，最后由一小群基督徒照顾她。后来这位妻子回家去，则再没受到逼迫，但她仍然坚守基督教信仰。现在共有 12位河州回教徒信了主，各人都受到很大的逼迫。除上述几位外，还有一位曾在河州医院听过福音的，回到他家乡拉卜浪 (Labrang)由宣道会宣教士为他施洗，现住在河州。他们定时聚在一起崇拜，并计划组建一个回民基督徒教会，盼望海春深夫妇能早日归来 。 ......我衷心希望能派更多宣教士，或几位护士、一位医生来。即或不然，可否有人来管理医院或兼任一部分传福音的工作？我甚至斗胆冀求能否请金师母回来？我们实在想念她&quot;。接着，安乐欢又谈到自己的近况：&quot; 我仍过着独身的生活，全心仰望主。我看主比以前更宝贵，若非如此，我真感到好孤单！&quot;</p>

<p>1927年冬，安乐欢再次报告了回民和藏人归主的情形：&quot;有七位痲疯病人申请受洗，看来他们已经准备好了，但仍要等明春考问信心后才可决定。其中一位是西藏喇嘛青年，另有两位回教徒。他们在医院信主比在本乡容易得多，但这仍是恩典里的见证。他们坐在特制的板凳上听道，在祷告会和赞美会上，他们的见证是何等悦耳动听！......一位快要复元的青年人说他已经准备好回乡传福音。我们有11位西藏病人，那位夏天受了洗的老喇嘛懂得汉、藏两种语言，他不仅为传道 人翻译信息，并且还主动地去接触协助西藏病人&quot;。</p>

<p>北伐成功后，中国政局暂时安定下来，宣教士纷纷从沿海地区转回内陆。1928年，博德恩医院的前传道人吴林德教士(Mr. Lawrence C. Wood)回来，同来的还有英国宣教士戴乐仁医生夫妇 (Dr. &amp; Mrs. A. G. Taylor)。他们和安乐欢年纪相彷，在医疗和宣教工作上，彼此配搭事奉，合作无间。</p>

<p>1928年，西北发生特大饥荒，根据当年12月9日的史志记载：&quot; 甘肃灾情奇重，灾民占全省人口八成 &quot; 。1929年初，饥荒愈发严重，遍 地饿殍，医院里人满为患。安乐欢终日忙于管理医院、医病救人，或外出巡迴医疗佈道，抢救灾民......。繁重的工作使他的体力与健康透支，同年4月，他终于病倒了。起初只是有些发烧，两周后病情突然恶化，戴乐仁医生立刻把他接到家里去，却发现他已全身发出红疹，断定他是在救治灾民时感染上伤寒（Typhus Fever）。戴医生虽竭力施救，仍无法挽回他的生命。1929年5月8日，安乐欢安然离世，年仅33岁。为拯救中国人的身体灵魂，他献出了自己年轻的生命。</p>

<p><br />
《华人基督教史人物辞典》<br />
&nbsp;http://www.bdcconline.net/zh-hans/stories/by-person/a/an-lehuan.php</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->