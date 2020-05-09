<template>
  <div class="profile-main">
    <el-row style="margin-bottom: 20px;">
      <h1>Profile Management</h1>
      <el-divider content-position="left"><h2>{{ "View & Edit Account Information" }}</h2></el-divider>
    </el-row>

    <el-card>
      <el-form :model="profileForm" ref="profileForm" class="card-form" label-position="top">
        <el-row style="margin-bottom: 20px;">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-collection"></i>
              <span>Identification</span>
            </div>

            <div class="card-body">
              <el-row :gutter="20">
                <el-col :span="6">
                  <el-form-item label="Certificate ID">
                    <el-input v-model="profileForm.certificateID"/>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="Account ID">
                    <el-input v-model="profileForm.accountID"/>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="Position">
                    <el-select v-model="profileForm.position">
                      <el-option label="Professor" value="prof"></el-option>
                      <el-option label="Instructor" value="instruc"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-row>

        <el-row style="margin-bottom: 20px;">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-tickets"></i>
              <span>Basic Information</span>
            </div>

            <div class="card-body">
              <el-row :gutter="20">
                <el-col :span="2">
                  <el-form-item label="Salutation">
                    <el-select v-model="profileForm.salutation">
                      <el-option label="Mr." value="mr."></el-option>
                      <el-option label="Mrs." value="mrs"></el-option>
                      <el-option label="Mdm." value="mdm"></el-option>
                      <el-option label="Ms." value="ms"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="First Name">
                    <el-input v-model="profileForm.firstName"/>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Last Name">
                    <el-input v-model="profileForm.lastName"/>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row :gutter="20">
                <el-col :span="6">
                  <el-form-item label="Tax Identifier">
                    <el-input v-model="profileForm.taxIdentifier"/>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="Date of Birth">
                    <el-date-picker type="date" placeholder="Pick a date" v-model="profileForm.dob" style="width: 100%;"/>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="Gender">
                    <el-select v-model="profileForm.gender">
                      <el-option label="Male" value="m"></el-option>
                      <el-option label="Female" value="f"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-row>

        <el-row style="margin-bottom: 20px;">
          <el-card shadow="hover" class="inner-card">
            <div class="card-header" slot="header">
              <i class="el-icon-wallet"></i>
              <span>Profile</span>
            </div>

            <div class="card-body">
              <el-row :gutter="20">
                <el-col :span="6">
                  <el-form-item label="Nationality">
                    <el-input v-model="profileForm.nationality"/>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="Email">
                    <el-input v-model="profileForm.email"/>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="Fax">
                    <el-input v-model="profileForm.fax" placeholder="Optional"/>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="Ethnicity">
                    <el-select v-model="profileForm.eethnicity">
                      <el-option label="Chinese" value="chinese"></el-option>
                      <el-option label="Malay" value="malay"></el-option>
                      <el-option label="Indian" value="indian"></el-option>
                      <el-option label="others" value="others"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row style="margin-bottom: 20px;">
                <el-card shadow="hover" class="inner-card">
                  <div class="card-header" slot="header">
                    <i class="el-icon-school"></i>
                    <span>Address</span>
                  </div>

                  <div class="card-body">
                    <el-row :gutter="20">
                      <el-col :span="12">
                        <el-form-item label="Street Address 1">
                          <el-input v-model="profileForm.streetAddress1" type="textarea"/>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="Street Address 2">
                          <el-input v-model="profileForm.streetAddress2" type="textarea" placeholder="Optional"/>
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row :gutter="20">
                      <el-col :span="8">
                        <el-form-item label="Country">
                          <el-input v-model="profileForm.country"/>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="City">
                          <el-input v-model="profileForm.city"/>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="State">
                          <el-input v-model="profileForm.state"/>
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row :gutter="20">
                      <el-col :span="6">
                        <el-form-item label="Postal Code">
                          <el-input v-model="profileForm.postalCode"/>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
              </el-row>

              <el-row>
                <el-card shadow="hover" class="inner-card">
                  <div class="card-header" slot="header">
                    <i class="el-icon-mobile-phone"></i>
                    <span>Contact</span>
                  </div>

                  <div class="card-body">
                    <el-row :gutter="20">
                      <el-col :span="4">
                        <el-form-item label="Country Code">
                          <el-input v-model="profileForm.countryCodeMobile"/>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="Mobile Number">
                          <el-input v-model="profileForm.mobileNumber"/>
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row :gutter="20">
                      <el-col :span="4">
                        <el-form-item label="Country Code">
                          <el-input v-model="profileForm.countryCodeHome" placeholder="Optional"/>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="Home Number">
                          <el-input v-model="profileForm.homeNumber" placeholder="Optional"/>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
              </el-row>
            </div>
          </el-card>
        </el-row>

        <el-form-item class="wrapper">
          <el-button class="card-button" icon="el-icon-edit" type="primary" @click="update" plain>Update</el-button>
          <el-button class="card-button" icon="el-icon-refresh" type="warning" @click="reset" plain>Reset</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      profileForm: {
        certificateID: 'S1111111Z',
        accountID: '0000001112',
        position: 'Professor',
        salutation: 'mr.',
        firstName: 'Micheal',
        lastName: 'Keaton',
        taxIdentifier: 'S1111111Z',
        dob: new Date('1984-08-25'),
        nationality: 'Singaporean',
        email: 'micheal.keaton@smu.edu.sg',
        fax: '',
        ethnicity: 'European',
        gender: 'm',
        streetAddress1: '605 Bukit Merak Heights, 355605',
        streetAddress2: '',
        country: 'Singapore',
        city: 'Singapore',
        state: 'Singapore',
        postalCode: '355605',
        countryCodeMobile: '65',
        mobileNumber: '97881234',
        countryCodeHome: '',
        homeNumber: ''
      }
    }
  },
  methods: {
    update () {
      console.log('Update Profile')
      this.$notify({
        title: 'Warning',
        message: 'This is a prototype, button function "updateProfile" is not mapped yet.',
        type: 'warning'
      })
    },
    reset () {
      console.log('Reset Profile')
      this.profileForm = {
        certificateID: 'S1111111Z',
        accountID: '0000001112',
        position: 'Professor',
        salutation: 'mr.',
        firstName: 'Micheal',
        lastName: 'Keaton',
        taxIdentifier: 'S1111111Z',
        dob: new Date('1984-08-25'),
        nationality: 'Singaporean',
        email: 'micheal.keaton@smu.edu.sg',
        fax: '',
        ethnicity: 'European',
        gender: 'm',
        streetAddress1: '605 Bukit Merak Heights, 355605',
        streetAddress2: '',
        country: 'Singapore',
        city: 'Singapore',
        state: 'Singapore',
        postalCode: '355605',
        countryCodeMobile: '65',
        mobileNumber: '97881234',
        countryCodeHome: '',
        homeNumber: ''
      }
      this.$notify.info({
        title: 'Info',
        message: 'Profile form has be resetted.'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    text-align: center;
}
.card-button {
  position: relative;
  margin: 10px;
}
</style>
