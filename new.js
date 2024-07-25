$(document).ready(function () {
    $("#editForm").on("submit", function (e) {
        e.preventDefault();

        let first_name = $('#editFirstName').val();
        let last_name = $('#editLastName').val();
        let email = $('#editEmail').val();
        let phone = $('#editPhoneNumber').val();
        let store_name = $('#editStoreName').val();
        let descp = $('#editDescription').val();
        let icon = $('#editIcon').val();
        let banner = $('#editBanner').val();
        let state = $('#editState').val();
        let district = $('#editDistrict').val();
        let phones = $('#editPhoneNumbers').val();
        let first_nameErr = $('#editFirstNameErr');
        let last_nameErr = $('#editLastNameErr');
        let emailErr = $('#editEmailErr');
        let phoneErr = $('#editPhoneNumberErr');
        let store_nameErr = $('#editStoreNameErr');
        let descpErr = $('#editDescriptionErr');
        let iconErr = $('#editIconErr');
        let bannerErr = $('#editBannerErr');
        let stateErr = $('#editStateErr');
        let districtErr = $('#editDistrictErr');
        let phonesErr = $('#editPhoneNumbersErr');
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        let valid = true;

        // Clear previous error messages
        first_nameErr.text('');
        last_nameErr.text('');
        emailErr.text('');
        phoneErr.text('');
        store_nameErr.text('');
        descpErr.text('');
        iconErr.text('');
        bannerErr.text('');
        stateErr.text('');
        districtErr.text('');
        phonesErr.text('');

        if (first_name === "") {
            first_nameErr.text('First name cannot be empty');
            valid = false;
        } if (last_name === "") {
            last_nameErr.text('Last name cannot be empty');
            valid = false;
        } if (email === "") {
            emailErr.text('Email cannot be empty');
            valid = false;
        } else if (!emailRegex.test(email)) {
            emailErr.text('Enter a valid email');
            valid = false;
        }
        if (phone === "") {
            first_nameErr.text('Phone number cannot be empty');
            valid = false;
        } else if (phone.length < 11) {
            passwordErr.text('Phone number cannot be less than 11 characters');
            valid = false;
        } if (store_name === "") {
            store_nameErr.text('Store name cannot be empty');
            valid = false;
        } if (descp === "") {
            descpErr.text('description cannot be empty');
            valid = false;
        } if (icon === "") {
            iconErr.text('choose an icon');
            valid = false;
        } if (banner === "") {
            bannerErr.text('choose a banner');
            valid = false;
        } if (state === "") {
            stateErr.text('choose a state');
            valid = false;
        } if (district === "") {
            districtErr.text('choose a district');
            valid = false;
        } if (phones === "") {
            phoneErr.text('phones cannot be empty');
            valid = false;
        }
       
    })
})




