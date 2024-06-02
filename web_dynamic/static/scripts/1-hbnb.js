$(document).ready(function() {
  $('input[type="checkbox"]').change(function() {
    var checkedAmenities = [];
    $('input[type="checkbox"]:checked').each(function() {
      checkedAmenities.push($(this).data('id'));
    });
    var amenitiesText = checkedAmenities.join(', ');
    $('.amenities h4').text(amenitiesText);
  });
});
