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
                        <div class="chapter_number ltr"><h1>53.1.</h1></div>
                        <div class="chapter_title ltr"><h1>《主仆：史祈生》</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
<h2 class="reference">史祈生 1920-1984</h2>

<p class="forward">二十世纪华人教会名牧、布道家；中华海外宣道会创始人。</p>

<p class="forward">史祈生于1920年1月1日出生于福建泉州一个基督徒家庭，族谱名为悠力。父亲史致诚早年信主，常年在外经商。母亲杜纯德虔诚爱主，非常能干。两人共生下四男三女。长子夭折时，家中有三女一男，母亲祈求主再赐下一男，而且许愿要将此男孩奉献给主，为主所用。神听了祷告，母亲为他取名祈生，以纪念神的恩典。史祈生受母亲的影响非常大，他母亲不仅藉祈祷生下了他，而且他一生事奉的功效也是靠母亲祈祷的力量。</p>

<p class="forward">史祈生自幼生性好动，不喜安静读书，有时还会闯祸，是人人见了都会头痛的顽童。1932年，年仅12岁的史祈生进入热心事主的大姊夫陈养谦的仁济诊疗所作学徒，大姊夫对史祈生的成长影响很大。1934年秋天，贪玩的史祈生随母亲、二哥、三姐一起到厦门参加宋尚节博士的奋兴布道大会。一心想出去玩耍的史祈生挤坐在二哥三姐之间无心听道。忽然宋博士指着他说：&ldquo;拉撒路出来！你死了，臭了，用布绑住了！主耶稣吩咐你出来！出来！赶快从坟墓里出来！&rdquo; 史祈生蒙圣灵光照，看到自己的污秽、罪恶，于是流泪痛哭，挤到台前认罪悔改，同时也把自己奉献给神。生命改变之后，史祈生特别去拜访从汕头来闽南各处讲道的林佩轩先生，请他改个新名，纪念自己的重生和献身。林送给他提摩太前书 6:19节，并以其中&ldquo;持定生命&rdquo; 一语为根据，给他改名为&ldquo;持生&rdquo;。后来史祈生觉得还是母亲起初命的名字最好，所以又改回来了。</p>

<p class="forward">1936年夏天，史祈生以旁听生的身份进入设在上海的伯特利神学院学习。他一反过去不能静坐读书的脾性，用功学习，又乐于参加学校一切活动，成绩便突飞猛进。一学期后，校方就自动将他转为正式生。史祈生在那里不但受到师友的灵性影响，在生活上也经历了信心的锻炼。1937年夏，因抗日战争的爆发，史祈生被迫疏散回乡，在家乡热心传福音。1939年，史祈生进入已搬迁到香港的伯特利神学院复学，1941年1月毕业后，被香港刚成立的闽南语教会延揽为第一位传道人。</p>

<p class="forward">香港沦陷后，日伪政府下令人民返乡。史祈生与几位同学认为这是随走随传的好机会，于是组织&ldquo;以勒布道团&rdquo;，走遍广东的许多大小城镇，蒙神赐福，结了许多福音果子。四、五个月后，布道团化整为零，史祈生独自走遍潮汕一带，也去了梅县、五华等客家地方，最后经曲江到江西的赣县，才结束了这段随走随传的生涯。史祈生在赣县作了一年的随军牧师后，又被广东基督教联合中学聘为宗教主任，深受师生们的爱戴。</p>

<p class="forward">抗战胜利后，史祈生在返乡途中仍用随走随传的方法，一路的工作蒙神大大赐福。在厦门、鼓浪屿主领的一连串聚会，是在宋尚节博士以后最为盛大的一次，影响久远，被称为&ldquo;宋尚节第二&rdquo;、&ldquo;小宋尚节&rdquo;。 因受聚会处的吸引，史祈生于1947年曾在广州和菲律宾马尼拉聚会处事奉，后脱离。</p>

<p class="forward">1948年6月13日，中国布道会假上海天安堂，由会长计志文牧师主礼为史祈生举行按牧典礼。同年底，史祈生到新加坡。1949年，被聘为禧年堂的牧师。同年11月10日，史祈生与相识六年之久的内地 会牧师之女欧阳仁（后笔名涤然）结婚，育有两男两女：长子晓明、次子晓昕，长女晓虹、次女晓晴。</p>

<p class="forward">史祈生在禧年堂作了十年的驻堂牧师。起初的会务近乎开荒工作，在他的殷勤服事下，会务渐趋正规，后来会友达到四百余人。他毫无成见地开放教会，先后接待了王载、赵世光、赵君影、计志文、苏佐扬、吴勇、吴恩溥等十几位布道家，当时的禧年堂成了新加坡奋兴布道会的中心，也是布道家们的驻足点。</p>

<p class="forward">史祈生每个主日都是有系统性的讲道，他认为这样既可以造就信徒，也可以逼着自己去研读全部圣经，对人对己都有益；所以终其一生他都用这个方法在自己牧养的教会里讲道。他的讲章后来编辑成书出版：《圣经综要》、《耶稣所行的神迹》、《耶稣所讲的比喻》、《旧约的神迹》、《十诫》、《主祷文十四讲》、《圣经中宝贵的应许》等十几本。</p>

<p class="forward">1958年8月，史祈生全家离开事奉长达十年的禧年堂，去到美国纽约的中国城，开始新的事奉。史祈生首先在华人福音会牧会，他那有活力的讲道吸引了许多人。在那里，他不但开始了福音团契和国语礼拜（原有粤语礼拜），还自己编排、油印了福音性刊物《福音月刊》，免费寄发到全世界。</p>

<p class="forward">1961年10月1日，史祈生假柏街（Park Row）158号的恩望教会 (Grace and Hope Mission) ，成立了纽约中华海外宣道会(Oversea Chinese Mission)。五年后，史祈生凭信心购买了位于喜士打街（Hester Street）的十层大厦&mdash;&mdash;占士儿童中心，共有五万四千平方英尺，可说是海外华侨教会中使用面积最大的了。他们于1966年圣诞节前搬进了占士中心，举行了一连串的庆祝节目。史祈生不但十分注重主日崇拜，也在教会里先后成立了粤语团契、英语团契、伉俪团契、雅歌团契和姊妹团契等各种团契。到1974年，参加礼拜的人已超过千人。他还一直注意在外地的宣教工作，1973 年在教会正式成立宣道小组，1975年在台北购堂成立分会。 1976年起，又在巴西、千里达、芝加哥、旧金山等地成立分会。</p>

<p class="forward">史祈生在纽约市的中国城，默默开垦了十几年，直到中宣会已稍具规模，有同工们的配搭事奉，他才又开始出去领会。1973年，他和滕近辉牧师同任台湾第一届研经培灵大会的讲员；又先后去菲律宾、新加坡、南美洲、千里达、香港、韩国、泰国、缅甸、印度、日本和欧洲讲道；同时，他也常到北美各地留学生的查经班、华人教会中主领夏令营或其他特别聚会。</p>

<p class="forward">1983年夏，史祈生从中宣会退休，不再担任主任牧师，却又被同工冠上会督的头衔。因新加坡禧年堂要举行&ldquo;设教百周年&rdquo;庆祝大会，邀请史祈生夫妇回去参加，所以史祈生安排了三个月的远东之行。12月15日到达新加坡，不但参加了禧年堂的庆典，还先后去了马来西亚、菲律宾、香港、台湾探望旧友。1984年2月19日是主日，史祈生带病在台南大林教会传讲 &ldquo;好牧人&rdquo; 信息；晚上在二空教会宣讲&ldquo;以爱为旗&rdquo;。讲道时，他只觉得呼吸困难，使不出力气来，却没想到，这是他最后一次站在讲台上，传讲神的信息。</p>

<p class="forward">1984年7月11日，史祈生病逝于檀香山，时年64岁。16日，在檀香山举行了安息礼拜，史祈生的亲家计马可为史祈生下了盖棺定论：&ldquo;我们华人教会中有最会布道的宋尚节，最会解经的倪柝声，最注重信徒生活的王明道。我要说，史祈生是三者兼而有之。他讲道有能力，对会友又有爱心，是一位模范的牧师。&rdquo;21日，在纽约教会举行了盛大的追思会，有各教会二十六位牧师和一千多名会友参加。台北、新加坡、巴西等地的教会也相继为他举行了追思会。史祈生墓地铜碑 上只写了简单的五个字：&ldquo;主仆史祈生&rdquo; 和他的生卒年月日。</p>

<p class="forward">取自 《华人基督教史人物辞典》</p>

<p class="forward">http://www.bdcconline.net/zh-hans/stories/by-person/s/shi-qisheng.php</p>



<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->