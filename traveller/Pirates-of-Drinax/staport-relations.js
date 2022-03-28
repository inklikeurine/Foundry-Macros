main()

function main(){

    //Set up data inside the dialog box we will be creating
    //this will also layout the box.
    let dialogContent = `
    <H1>Select Starport Status</H1>
    <div style="display:flex; float:left; padding:10px 10px 10px 10px">
        <span style="flex:1"
            <label for="starpotStatus">Choose a Status:</label>
                <select name="starpotStatus" id="starpotStatus">
                    <option value="haven">Haven</option>
                    <option value="friendly">Fiendly</option>
                    <option value="tolerantVery">Very Tolerant</option>
                    <option value="tolerantMild">Tolerant</option>
                    <option value="suspicious">Suspicious</option>
                    <option value="unfriendly">Unfriendly</option>
                    <option value="hostile">Hostile</option>
                </select>
        </span>
    </div>
    `
    //Create a dialog box
    new Dialog({
        title:"Starport Relations",
        //This is where we call out the content we made earlier
        content: dialogContent,
        //creates buttons for the dialog box
        buttons: {
            //Creates a button labeled "Submit"
            submit: {
                //where most of our code will end up
                label:"Submit",
                //Get data from the id="Value" of the select drop down list.
                callback: (html) => {
                    starportID= html.find("#starpotStatus")[0].value;
                //Finally time to roll the fucking dice
                let recruitChanceRoll = new Roll(2d6).roll();
                }
            },
            close_dialog: {
                label:"Close"
            }
        }
    }).render(true);

}
