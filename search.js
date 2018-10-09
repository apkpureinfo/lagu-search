var recentSearches = []; // create an empty javascript array

//this function is called using the search buttons "onclick"
function searchFunction(data) {
    
    recentSearches.push($('#textboxSearch').val()); // This line puts the value from the text box in an array
    $('#textboxSearch').val(""); //  clear the text box after search
    $('#searchHistory').text(""); //clear the seach history window then repopulate with the new array
    
    // the function below loops through the array and adds each item in the array
    // to the span element within the Search history arear
    $.each(recentSearches, function (index, value) {
        $('#searchHistory').append("<li class='historyItem'  onclick='addtotextbox("+index+")'>" + value + '</li>');
    });
}

function addtotextbox(id)
{
$('#textboxSearch').val(recentSearches[id]);
}
