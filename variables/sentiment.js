function() {
 
    //Leave below as is. This variable will return the actual sentiment values. The name of the variable 
    //'sentimentSelect' should be equal to the other variable that is used to select the right text.

	var sentiment = new Sentimood();
  
	return sentiment.analyze("{{sentimentSelect}}");
      
  }
