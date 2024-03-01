$.ajax({
    url: 'http://localhost:3000/posts', // URL of the resource
    type: 'GET',
    success: function(data) {
        console.log('GET request successful:', data);
    },
    error: function(xhr, status, error) {
        console.error('GET request failed:', error);
    }
});


var newData = {
    title: 'New Post',
    body: 'HELLO.'
};

$.ajax({
    url: 'http://localhost:3000/posts', // URL of the resource
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(newData),
    success: function(data) {
        console.log('POST request successful:', data);
    },
    error: function(xhr, status, error) {
        console.error('POST request failed:', error);
    }
});
var updatedData = {
    title: 'Updated Post',
    body: 'Updated Hello.'
};

$.ajax({
    url: 'http://localhost:3000/posts/1',
    type: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify(updatedData),
    success: function(data) {
        console.log('PUT request successful:', data);
    },
    error: function(xhr, status, error) {
        console.error('PUT request failed:', error);
    }
});

