import React, { Component } from 'react'
import UniversityConn from '../../UniversityConnect';
class LoadPage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    handleSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="LoadPage-Wrapper container">
                <form onSubmit={e => this.handleSubmit(e)} >
                    
                        {/* <label for="first_name">First Name</label>
                        <input type="text" id="first_name" ></input>

                        <label for="last_name">Last Name</label>
                        <input type="text" id="last_name" ></input> */}
                        
                      
                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">First Name</span>
                            </div>
                            <input name ="first_name" type="text" className="form-control" id="first_name"/>
                        </div>

                        
                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Last Name</span>
                            </div>
                            <input name="last_name" type="text" className="form-control" id="last_name"/>
                        </div>
                        

                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Hometown</span>
                            </div>
                            <input name ="city" type="text" className="form-control" id="city"/>
                        </div>

                        
                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Year</span>
                            </div>
                            <select name="GradClass" className="form-control" id="school_year">
                            <option value="1">Freshman</option>
                            <option value="2">Sophmore</option>
                            <option value="3">Junior</option>
                            <option value="4">Senior</option>
                            <option value="5">Graduate Student</option>
                            </select>
                        </div>
                       
                       
                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">DOB</span>
                            </div>
                            <select name="Month" className="form-control" id="month">
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                            </select>
                            <select name="Day" className="form-control" id="month">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            </select>
                            <select name="Year" className="form-control" id="year">
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                            </select>
                        </div>
                        
                       
                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Relationship Status</span>
                            </div>
                            <select name="Relationship" className="form-control" id="relationship">
                            <option value="1">Single</option>
                            <option value="2">Relationship</option>
                            <option value="3">Engaged</option>
                            <option value="4">Married</option>
                            <option value="5">Civil Union</option>
                            <option value="6">Domestic Partnership</option>
                            <option value="7">Open Relationship</option>
                            <option value="8">Complicated</option>
                            <option value="9">Separated</option>
                            <option value="10">Divorced</option>
                            <option value="11">Widowed</option>
                            <option value="12" selected>Rather Not Say</option>
                            </select>
                        </div>
                        
                        
                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Gender</span>
                            </div>
                            <select name="Gender" className="form-control" id="gender">
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Neutral</option>
                            </select>
                        
                        </div> 


                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Degree</span>
                            </div>
                            <select name="Degree" className="form-control" id="degree">
                            <option value="1">Arts</option>
                            <option value="2">Fine Arts</option>
                            <option value="3">General Studies</option>
                            <option value="4">Music</option>
                            <option value="5">Music Education</option>
                            <option value="6">Science</option>
                            <option value="7">Business Administration</option>
                            <option value="8">Computer Engineering</option>
                            <option value="9">Electical Engineering</option>
                            <option value="10">Mechanical Engineering</option>
                            <option value="11">Nursing</option>
                            <option value="12">Social Work</option>
                            <option value="13" selected>Other</option>
                            </select>
                        </div> 


                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Political Party</span>
                            </div>
                            <select name="Degree" className="form-control" id="degree">
                            <option value="1">Republican</option>
                            <option value="2">Democratic</option>
                            <option value="3">Libertarian</option>
                            <option value="4">Green Party</option>
                            <option value="5">Constitution Party</option>
                            <option value="6">Independent</option>
                            <option value="7">Other</option>
                            <option value="8" selected>Rather Not Say</option>
                            </select>
                        </div> 

                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Favorite Food</span>
                            </div>
                            <input name ="food" type="text" className="form-control" id="food"/>
                        </div>


                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Ethnicity</span>
                            </div>
                            <select name="race" className="form-control" id="race">
                            <option value="1">Caucasian</option>
                            <option value="2">Black</option>
                            <option value="3">Hispanic</option>
                            <option value="4">Indian</option>
                            <option value="5">Middle Eastern</option>
                            <option value="6">Native American</option>
                            <option value="7">Asian</option>
                            <option value="8">Mixed Race</option>
                            <option value="9">Other</option>
                            <option value="10" selected>Rather Not Say</option>
                            </select>
                        </div> 

                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Religion</span>
                            </div>
                            <select name="religion" className="form-control" id="religion">
                            <option value="1">Non-religion</option>
                            <option value="2">New Age</option>
                            <option value="3">Muslim</option>
                            <option value="4">Jewish</option>
                            <option value="5">Catholic</option>
                            <option value="6">Buddhist</option>
                            <option value="7">Hindu</option>
                            <option value="8">Anglican</option>
                            <option value="8">Sikh</option>
                            <option value="8">Methodist</option>
                            <option value="8">Christian - other</option>
                            <option value="8">Baptist</option>
                            <option value="8">Lutheran</option>
                            <option value="8">Presbyterian</option>
                            <option value="9">Other</option>
                            <option value="10" selected>Rather Not Say</option>
                            </select>
                        </div> 


                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Do you Drink?</span>
                            </div>
                            <select name="drink" className="form-control" id="drink">
                            <option value="1">No</option>
                            <option value="2">Occasionally</option>
                            <option value="3">Often</option>
                            <option value="4" selected>Rather Not Say</option>
                            </select>
                        </div> 


                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Do you Smoke?</span>
                            </div>
                            <select name="smoke" className="form-control" id="smoke">
                            <option value="1">No</option>
                            <option value="2">Occasionally</option>
                            <option value="3">Often</option>
                            <option value="4" selected>Rather Not Say</option>
                            </select>
                        </div> 


                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Hobbies</span>
                            </div>
                            <select multiple name="Hobbies" className="form-control" id="hobbies">
                            <option value="1">3D printing</option>
                            <option value="2">Acrobatics</option>
                            <option value="3">Acting</option>
                            <option value="4">Amateur radio</option>
                            <option value="5">Animation</option>
                            <option value="6">Aquascaping</option>
                            <option value="7">Astronomy</option>
                            <option value="8">Baking</option>
                            <option value="9">Baton twirling</option>
                            <option value="10">Beatboxing</option>
                            <option value="11">Blogging</option>
                            <option value="12">Building</option>
                            <option value="13">Board/tabletop games</option>
                            <option value="14">Book discussion clubs</option>
                            <option value="15">Book restoration</option>
                            <option value="16">Bowling</option>
                            <option value="17">Brazilian jiu-jitsu</option>
                            <option value="18">Breadmaking</option>
                            <option value="19">Cabaret</option>
                            <option value="20">Calligraphy</option>
                            <option value="21">Candle making</option>
                            <option value="22">Car fixing and building</option>
                            <option value="23">Card games</option>
                            <option value="24">Cheesemaking</option>
                            <option value="25">Clothesmaking</option>
                            <option value="26">Coffee roasting</option>
                            <option value="27">Collecting</option>
                            <option value="28">Coloring</option>
                            <option value="29">Computer programming</option>
                            <option value="30">Confectionery</option>
                            <option value="31">Cooking</option>
                            <option value="32">Cosplaying</option>
                            <option value="33">Couponing</option>
                            <option value="34">Craft</option>
                            <option value="35">Creative writing</option>
                            <option value="36">Crocheting</option>
                            <option value="37">Cross-stitch</option>
                            <option value="38">Crossword puzzles</option>
                            <option value="39">Cryptography</option>
                            <option value="40">Cue sports</option>
                            <option value="41">Dance</option>
                            <option value="42">Diary writing</option>
                            <option value="43">Digital arts</option>
                            <option value="44">Distro Hopping</option>
                            <option value="45">Djing</option>
                            <option value="46">Do it yourself</option>
                            <option value="47">Drama</option>
                            <option value="48">Drawing</option>
                            <option value="49">Drink mixing</option>
                            <option value="50">Electronics</option>
                            <option value="51">Embroidery</option>
                            <option value="52">EuroBillTracker</option>
                            <option value="53">Experimenting</option>
                            <option value="54">Fantasy sports</option>
                            <option value="55">Fashion</option>
                            <option value="56">Fashion design</option>
                            <option value="57">Fishkeeping</option>
                            <option value="58">Flower arranging</option>
                            <option value="59">Foreign language learning</option>
                            <option value="60">Furniture building</option>
                            <option value="61">Gaming</option>
                            <option value="62">Genealogy</option>
                            <option value="63">Gingerbread house making</option>
                            <option value="64">Glassblowing</option>
                            <option value="65">Graphic design</option>
                            <option value="66">Gunsmithing</option>
                            <option value="67">Herp keeping</option>
                            <option value="68">Home improvement</option>
                            <option value="69">Homebrewing</option>
                            <option value="70">Hula hooping</option>
                            <option value="71">Hydroponics</option>
                            <option value="72">Ice skating</option>
                            <option value="73">Jewelry making</option>
                            <option value="74">Jigsaw puzzles</option>
                            <option value="75">Juggling</option>
                            <option value="76">Karaoke</option>
                            <option value="77">Karate</option>
                            <option value="78">Kendama</option>
                            <option value="79">Knife making</option>
                            <option value="80">Knitting</option>
                            <option value="81">Knot tying</option>
                            <option value="82">Kombucha brewing</option>
                            <option value="83">Lace making</option>
                            <option value="84">Lapidary</option>
                            <option value="85">Leather crafting</option>
                            <option value="86">Lego building</option>
                            <option value="87">Lock picking</option>
                            <option value="88">Listening to music</option>
                            <option value="89">Listening to podcasts</option>
                            <option value="90">Machining</option>
                            <option value="91">Macrame</option>
                            <option value="92">Magic</option>
                            <option value="93">Makeup</option>
                            <option value="94">Metalworking</option>
                            <option value="95">Model building</option>
                            <option value="96">Model engineering</option>
                            <option value="97">Nail Art</option>
                            <option value="98">Needlepoint</option>
                            <option value="99">Origami</option>
                            <option value="100">Painting</option>
                            <option value="101">Pet adoption and fostering</option>
                            <option value="102">Philately</option>
                            <option value="103">Photography</option>
                            <option value="104">Practical jokes</option>
                            <option value="105">Pressed flower craft</option>
                            <option value="106">Playing musical instruments</option>
                            <option value="107">Poi</option>
                            <option value="108">Pottery</option>
                            <option value="109">Puzzles</option>
                            <option value="110">Quilling</option>
                            <option value="111">Quilting</option>
                            <option value="112">Quizzes</option>
                            <option value="113">Rail transport modeling</option>
                            <option value="114">Rapping</option>
                            <option value="115">Reading</option>
                            <option value="116">Refinishing</option>
                            <option value="117">Robot combat</option>
                            <option value="118">Rubik's Cube</option>
                            <option value="119">Scrapbooking</option>
                            <option value="120">Sculpting</option>
                            <option value="121">Sewing</option>
                            <option value="122">Shoemaking</option>
                            <option value="123">Singing</option>
                            <option value="124">Sketching</option>
                            <option value="125">Soapmaking</option>
                            <option value="126">Social media</option>
                            <option value="127">Stand-up comedy</option>
                            <option value="128">Stamp collecting</option>
                            <option value="129">Table tennis</option>
                            <option value="130">Taxidermy</option>
                            <option value="131">Thrifting</option>
                            <option value="132">Video editing</option>
                            <option value="133">Video game developing</option>
                            <option value="134">Video gaming</option>
                            <option value="135">Watching movies</option>
                            <option value="136">Watching television</option>
                            <option value="137">Weaving</option>
                            <option value="138">Weight training</option>
                            <option value="139">Welding</option>
                            <option value="140">Whittling</option>
                            <option value="141">Wikipedia Editing</option>
                            <option value="142">Winemaking</option>
                            <option value="143">Wood carving</option>
                            <option value="144">Woodworking</option>
                            <option value="145">Worldbuilding</option>
                            <option value="146">Writing</option>
                            <option value="147">Word searches</option>
                            <option value="148">Yo-yoing</option>
                            <option value="149">Yoga</option>
                            <option value="150">Air sports</option>
                            <option value="151">Archery</option>
                            <option value="152">Astronomy</option>
                            <option value="153">Backpacking</option>
                            <option value="154">BASE jumping</option>
                            <option value="155">Baseball</option>
                            <option value="156">Basketball</option>
                            <option value="157">Beekeeping</option>
                            <option value="158">Bird watching</option>
                            <option value="159">Blacksmithing</option>
                            <option value="160">BMX</option>
                            <option value="161">Board sports</option>
                            <option value="162">Bodybuilding</option>
                            <option value="163">Butterfly watching</option>
                            <option value="164">Camping</option>
                            <option value="165">Canoeing</option>
                            <option value="166">Canyoning</option>
                            <option value="167">Caving</option>
                            <option value="168">Composting</option>
                            <option value="169">Cycling</option>
                            <option value="170">Dowsing</option>
                            <option value="171">Driving</option>
                            <option value="172">Fishing</option>
                            <option value="173">Flag football</option>
                            <option value="174">Flower growing</option>
                            <option value="175">Flying</option>
                            <option value="176">Flying disc</option>
                            <option value="177">Foraging</option>
                            <option value="178">Freestyle football</option>
                            <option value="179">Gardening</option>
                            <option value="180">Geocaching</option>
                            <option value="181">Ghost hunting</option>
                            <option value="182">Gold prospecting</option>
                            <option value="183">Graffiti</option>
                            <option value="184">Handball</option>
                            <option value="185">Herbalism</option>
                            <option value="186">Herping</option>
                            <option value="187">High-power rocketry</option>
                            <option value="188">Hiking</option>
                            <option value="189">Hobby horsing</option>
                            <option value="190">Hooping</option>
                            <option value="191">Horseback riding</option>
                            <option value="192">Hunting</option>
                            <option value="193">Inline skating</option>
                            <option value="194">Jogging</option>
                            <option value="195">Kayaking</option>
                            <option value="196">Kite flying</option>
                            <option value="197">Kitesurfing</option>
                            <option value="198">Lacrosse</option>
                            <option value="199">LARPing</option>
                            <option value="200">Letterboxing</option>
                            <option value="201">Longboarding</option>
                            <option value="202">Martial arts</option>
                            <option value="203">Metal detecting</option>
                            <option value="204">Meteorology</option>
                            <option value="205">Motor sports</option>
                            <option value="206">Mountain biking</option>
                            <option value="207">Mountaineering</option>
                            <option value="208">Mushroom hunting/mycology</option>
                            <option value="209">Netball</option>
                            <option value="210">Nordic skating</option>
                            <option value="211">Orienteering</option>
                            <option value="212">Paintball</option>
                            <option value="213">Parkour</option>
                            <option value="214">Photography</option>
                            <option value="215">Podcast hosting</option>
                            <option value="216">Polo</option>
                            <option value="217">Powerlifting</option>
                            <option value="218">Rafting</option>
                            <option value="219">Rappelling</option>
                            <option value="220">Road biking</option>
                            <option value="221">Rock climbing</option>
                            <option value="222">Roller skating</option>
                            <option value="223">Rugby</option>
                            <option value="224">Running</option>
                            <option value="225">Sailing</option>
                            <option value="226">Sand art</option>
                            <option value="227">Scouting</option>
                            <option value="228">Scuba diving</option>
                            <option value="229">Sculling or rowing</option>
                            <option value="230">Shooting</option>
                            <option value="231">Shopping</option>
                            <option value="232">Skateboarding</option>
                            <option value="233">Skiing</option>
                            <option value="234">Skimboarding</option>
                            <option value="235">Skydiving</option>
                            <option value="236">Slacklining</option>
                            <option value="237">Snowboarding</option>
                            <option value="238">Soccer</option>
                            <option value="239">Stone skipping</option>
                            <option value="240">Sun bathing</option>
                            <option value="241">Surfing</option>
                            <option value="242">Survivalism</option>
                            <option value="243">Swimming</option>
                            <option value="244">Taekwondo</option>
                            <option value="245">Tai chi</option>
                            <option value="246">Topiary</option>
                            <option value="247">Travel</option>
                            <option value="248">Urban exploration</option>
                            <option value="249">Vacation</option>
                            <option value="250">Vegetable farming</option>
                            <option value="251">Vehicle restoration</option>
                            <option value="252">Walking</option>
                            <option value="253">Water sports</option>
                            <option value="254">Action figure</option>
                            <option value="255">Antiquing</option>
                            <option value="256">Art collecting</option>
                            <option value="257">Book collecting</option>
                            <option value="258">Cartophily</option>
                            <option value="259">Coin collecting</option>
                            <option value="260">Comic book collecting</option>
                            <option value="261">Deltiology</option>
                            <option value="262">Die-cast toy</option>
                            <option value="263">Dolls</option>
                            <option value="264">Element collecting</option>
                            <option value="265">Ephemera collecting</option>
                            <option value="266">Fusilately</option>
                            <option value="267">Knife collecting</option>
                            <option value="268">Lotology</option>
                            <option value="269">Movie and movie memorabilia collecting</option>
                            <option value="270">Perfume</option>
                            <option value="271">Phillumeny</option>
                            <option value="272">Rail transport modelling</option>
                            <option value="273">Record collecting</option>
                            <option value="274">Rock tumbling</option>
                            <option value="275">Scutelliphily</option>
                            <option value="276">Antiquities</option>
                            <option value="277">Auto audiophilia</option>
                            <option value="278">Flower collecting and pressing</option>
                            <option value="279">Fossil hunting</option>
                            <option value="280">Insect collecting</option>
                            <option value="281">Magnet fishing</option>
                            <option value="282">Metal detecting</option>
                            <option value="283">Mineral collecting</option>
                            <option value="284">Rock balancing</option>
                            <option value="285">Sea glass collecting</option>
                            <option value="286">Seashell collecting</option>
                            <option value="287">Stone collecting</option>
                            <option value="288">Animal fancy</option>
                            <option value="289">Axe throwing</option>
                            <option value="290">Badminton</option>
                            <option value="291">Baton twirling</option>
                            <option value="292">Beauty pageants</option>
                            <option value="293">Billiards</option>
                            <option value="294">Bowling</option>
                            <option value="295">Boxing</option>
                            <option value="296">Bridge</option>
                            <option value="297">Cheerleading</option>
                            <option value="298">Chess</option>
                            <option value="299">Color guard</option>
                            <option value="300">Curling</option>
                            <option value="301">Dancing</option>
                            <option value="302">Darts</option>
                            <option value="303">Debate</option>
                            <option value="304">Eating</option>
                            <option value="305">Esports</option>
                            <option value="306">Fencing</option>
                            <option value="307">Go</option>
                            <option value="308">Gymnastics</option>
                            <option value="309">Ice hockey</option>
                            <option value="310">Ice skating</option>
                            <option value="311">Judo</option>
                            <option value="312">Jujitsu</option>
                            <option value="313">Kabaddi</option>
                            <option value="314">Laser tag</option>
                            <option value="315">Longboarding</option>
                            <option value="316">Mahjong</option>
                            <option value="317">Marbles</option>
                            <option value="318">Martial arts</option>
                            <option value="319">Poker</option>
                            <option value="320">Shogi</option>
                            <option value="321">Slot car racing</option>
                            <option value="322">Speedcubing</option>
                            <option value="323">Sport stacking</option>
                            <option value="324">Table football</option>
                            <option value="325">Table tennis</option>
                            <option value="326">Volleyball</option>
                            <option value="327">Weightlifting</option>
                            <option value="328">Wrestling</option>
                            <option value="329">Airsoft</option>
                            <option value="330">American football</option>
                            <option value="331">Archery</option>
                            <option value="332">Association football</option>
                            <option value="333">Australian rules football</option>
                            <option value="334">Auto racing</option>
                            <option value="335">Baseball</option>
                            <option value="336">Beach volleyball</option>
                            <option value="337">Breakdancing</option>
                            <option value="338">Climbing</option>
                            <option value="339">Cricket</option>
                            <option value="340">Cycling</option>
                            <option value="341">Disc golf</option>
                            <option value="342">Dog sport</option>
                            <option value="343">Equestrianism</option>
                            <option value="344">Exhibition drill</option>
                            <option value="345">Field hockey</option>
                            <option value="346">Figure skating</option>
                            <option value="347">Fishing</option>
                            <option value="348">Footbag</option>
                            <option value="349">Golfing</option>
                            <option value="350">Handball</option>
                            <option value="351">Horseback riding</option>
                            <option value="352">Jukskei</option>
                            <option value="353">Kart racing</option>
                            <option value="354">Knife throwing</option>
                            <option value="355">Lacrosse</option>
                            <option value="356">Longboarding</option>
                            <option value="357">Marching band</option>
                            <option value="358">Model aircraft</option>
                            <option value="359">Racquetball</option>
                            <option value="360">Radio-controlled car racing</option>
                            <option value="361">Roller derby</option>
                            <option value="362">Rugby league football</option>
                            <option value="363">Sculling or rowing</option>
                            <option value="364">Shooting sport</option>
                            <option value="365">Skateboarding</option>
                            <option value="366">Softball</option>
                            <option value="367">Speed skating</option>
                            <option value="368">Squash</option>
                            <option value="369">Surfing</option>
                            <option value="370">Swimming</option>
                            <option value="371">Table tennis</option>
                            <option value="372">Tennis</option>
                            <option value="373">Tennis polo</option>
                            <option value="374">Tether car</option>
                            <option value="375">Tour skating</option>
                            <option value="376">Trapshooting</option>
                            <option value="377">Triathlon</option>
                            <option value="378">Ultimate frisbee</option>
                            <option value="379">Volleyball</option>
                            <option value="380">Water polo</option>
                            <option value="381">Fishkeeping</option>
                            <option value="382">Learning</option>
                            <option value="383">Meditation</option>
                            <option value="384">Microscopy</option>
                            <option value="385">Reading</option>
                            <option value="386">Shortwave listening</option>
                            <option value="387">Audiophile</option>
                            <option value="388">Videophilia</option>
                            <option value="389">Aircraft spotting</option>
                            <option value="390">Amateur astronomy</option>
                            <option value="391">Birdwatching</option>
                            <option value="392">Bus spotting</option>
                            <option value="393">Geocaching</option>
                            <option value="394">Gongoozling</option>
                            <option value="395">Herping</option>
                            <option value="396">Hiking/backpacking</option>
                            <option value="397">Meteorology</option>
                            <option value="398">Photography</option>
                            <option value="399">Satellite watching</option>
                            <option value="400">Trainspotting</option>
                            <option value="401">Traveling</option>
                            <option value="402">Whale watching</option>
                            <option value="403">Other</option>
                            </select>
                        </div>


                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Movies</span>
                            </div>
                            <select multiple name="movies" className="form-control" id="movies">
                            <option value="1">Action</option>
                            <option value="2">Adventure</option>
                            <option value="3">Comedy</option>
                            <option value="4">Crime</option>
                            <option value="5">Drama</option>
                            <option value="6">Fantasy</option>
                            <option value="7">History</option>
                            <option value="8">Horror</option>
                            <option value="9">Musical</option>
                            <option value="10">Mystery</option>
                            <option value="11">Romance</option>
                            <option value="12">Sci-Fi</option>
                            <option value="13">War</option>
                            <option value="14">Other</option>
                            </select>
                        </div> 


                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Books</span>
                            </div>
                            <select multiple name="books" className="form-control" id="books">
                            <option value="1">Science Fiction </option>
                            <option value="2">Satire</option>
                            <option value="3">Drama</option>
                            <option value="4">Action and Adventure</option>
                            <option value="5">Romance</option>
                            <option value="6">Mystery</option>
                            <option value="7">Horror</option>
                            <option value="8">Self Help</option>
                            <option value="9">Guide</option>
                            <option value="10">Travel</option>
                            <option value="11">Children's</option>
                            <option value="12">Religious</option>
                            <option value="13">Science</option>
                            <option value="14">History</option>
                            <option value="15">Math</option>
                            <option value="16">Anthologies</option>
                            <option value="17">Poetry</option>
                            <option value="18">Encyclopedia</option>
                            <option value="19">Dictionaries</option>
                            <option value="20">Comics</option>
                            <option value="21">Art</option>
                            <option value="22">Cookbooks</option>
                            <option value="23">Diaries</option>
                            <option value="24">Prayer books</option>
                            <option value="25">Series</option>
                            <option value="26">Trilogies</option>
                            <option value="27">Biographies</option>
                            <option value="28">Autobiographies</option>
                            <option value="29">Fantasy</option>
                            <option value="30">Other</option>
                            </select>
                        </div> 


                        <div className="input-group col-md-auto mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Music</span>
                            </div>
                            <select multiple name="music" className="form-control" id="music">
                            <option value="1">Musical theatre</option>
                            <option value="2">Classical music</option>
                            <option value="3">Jazz</option>
                            <option value="4">Popular music</option>
                            <option value="5">Folk music</option>
                            <option value="6">Rock</option>
                            <option value="7">Blues</option>
                            <option value="8">Singing</option>
                            <option value="9">Country music</option>
                            <option value="10">Hip hop music</option>
                            <option value="11">Heavy metal</option>
                            <option value="12">Orchestra</option>
                            <option value="13">Reggae</option>
                            <option value="14">Pop music</option>
                            <option value="15">Baroque music</option>
                            <option value="16">Instrumental</option>
                            <option value="17">Soul music</option>
                            <option value="18">Electronic dance music</option>
                            <option value="19">Funk</option>
                            <option value="20">Rhythm and blues</option>
                            <option value="21">Rapping</option>
                            <option value="22">Techno</option>
                            <option value="23">Soundtrack</option>
                            <option value="24">Opera</option>
                            <option value="25">Ambient music</option>
                            <option value="26">Alternative rock</option>
                            <option value="27">Punk rock</option>
                            <option value="28">Dance music</option>
                            <option value="29">World music</option>
                            <option value="30">Disco</option>
                            <option value="31">Gospel music</option>
                            <option value="32">Romantic music</option>
                            <option value="33">Chant</option>
                            <option value="34">Progressive rock</option>
                            <option value="35">Trance music</option>
                            <option value="36">Dubstep</option>
                            <option value="37">Medieval music</option>
                            <option value="38">Acoustic music</option>
                            <option value="39">Easy listening</option>
                            <option value="40">Noise</option>
                            <option value="41">Thrash metal</option>
                            <option value="42">Music of Latin America</option>
                            <option value="43">House music</option>
                            <option value="44">Pop rock</option>
                            <option value="45">Ska</option>
                            <option value="46">Indie rock</option>
                            <option value="47">Video game music</option>
                            <option value="48">Death metal</option>
                            <option value="49">Vocal music</option>
                            <option value="50">Drum and bass</option>
                            <option value="51">Grunge</option>
                            </select>
                        </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                   
                    {/* <input type="submit" value="Submit" /> */}
                   
                </form>


            </div>
        )
    }

}

export default LoadPage;
// export default UniversityConn.registerModel({

//     path: '/Components/LoadPage/LoadPage',
//     Component: LoadPage,
//     title: 'LoadPage',

//     type: 'model'
// })