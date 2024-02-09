import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import URLManager from '../../networkLayer/URLManager';
import {Alert} from 'react-native';
import {
  AnswersResponse,
  Questions,
  Answers,
} from '../../stateManagemer/models/HomeScreenModel';
import {STRINGS, Utils} from '../../resources';

export const keysAnswers = [
  'question0',
  'question2',
  'question3',
  'question4',
  'question5',
  'question6',
];

interface Banner {
  file_url: string;
  full_url: string;
  id: number;
  is_active: number;
  name: string;
  sort_order: number;
}
interface UserType {
  code: string;
  firstName: string;
  gender: number;
  lastName: string;
  number: string;
  email: string;
  password: string;
  age: number;
  weight: number;
  language: 'English' | 'Hindi';
  string: typeof STRINGS.Eng_Strings | typeof STRINGS.Hin_Strings;
  question: Questions | null;
  currentQuestionNumber: number;
  isLoading: boolean;
  noOfTheseSelected:boolean;
  priority: string;
  message: string;
  selectedIds: [
    string[],
    string[],
    string[],
    string[],
    string[],
    string[],
    string[],
  ];
  BannerData: Banner[];
}

// Define the initial state using that type
const initialState: UserType = {
  gender: 0,
  code: '',
  firstName: '',
  lastName: '',
  number: '',
  password: '',
  email: '',
  age: 0,
  weight: 0,
  language: 'English',
  string: STRINGS.Eng_Strings,
  question: null,
  isLoading: false,
  noOfTheseSelected:false,
  currentQuestionNumber: 0,
  selectedIds: [[], [], [], [], [], [], []],
  priority: '',
  message: '',
  BannerData: [],
};

export const getQuestions = createAsyncThunk('user/getQuestions', async () => {
  try {
    let data = await fetch(
      'https://heartapp.technochords.com/api/get-questions',
    )
      .then(res => {
        return res.json() as Promise<Questions>;
      })
      .then(res => {
        return res;
      })
      .catch(e => {
        Alert.alert(e.name, e.message);
        return e.response;
      });
    return data;
  } catch (error) {
    Alert.alert('Error');
  }
});
export const loginApi = createAsyncThunk(
  'user/loginApi',
  async ({email, password}: {email: string; password: string}) => {
    try {
      let data = await fetch(
        'https://heartapp.technochords.com/api/user/login',
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        },
      )
        .then(res => {
          return res.json();
        })
        .then(res => {
          return res;
        })
        .catch(e => {
          Alert.alert(e.name + 'slice', e.message);
          return e.response;
        });
      // let bannerData = await fetch(
      //   'http://heartapp.technochords.com/api/get-banners',
      // )
      //   .then(res => {
      //     return res.json();
      //   })
      //   .then(res => {
      //     return res;
      //   })
      //   .catch(e => {
      //     Alert.alert(e.name, e.message);
      //     return e.response;
      //   });
      return {data, bannerData: {response: []}};
      // return {data, bannerData};
    } catch (error) {
      Alert.alert('Error');
    }
  },
);
export const updatePassword = createAsyncThunk(
  'user/updatePassword',
  async ({code, password}: {code: string; password: string}) => {
    try {
      let data = await fetch(
        'https://heartapp.technochords.com/api/user/update-password',
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            apiCode: code,
            password: password,
          }),
        },
      )
        .then(res => {
          return res.json();
        })
        .then(res => {
          return res;
        })
        .catch(e => {
          Alert.alert(e.name, e.message);
          return e.response;
        });
      return data;
    } catch (error) {
      Alert.alert('Error');
    }
  },
);
export const registerApi = createAsyncThunk(
  'user/registerApi',
  async ({
    firstName,
    lastName,
    email,
    mobile,
    password,
  }: {
    firstName: String;
    lastName: string;
    email: string;
    mobile: string;
    password: string;
  }) => {
    try {
      let data = await fetch(
        'https://heartapp.technochords.com/api/user/register',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstname: firstName,
            lastname: lastName,
            email: email,
            mobile: mobile,
            password: password,
          }),
        },
      )
        .then(res => {
          return res.json();
        })
        .then(res => {
          console.log(res);
          return res;
        })
        .catch(e => {
          Alert.alert(e.name, e.message);
          return e.response;
        });
      return data;
    } catch (error) {
      Alert.alert('Error');
    }
  },
);
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      console.log('here');
      state.number = '';
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.password = '';
      state.age = 0;
      state.weight = 0;
      state.string = STRINGS.Eng_Strings;
      state.language = 'English';
      Utils.clearAll();
    },

    login: (state, action: PayloadAction<any>) => {
      console.log(action.payload.number, 'HERE');
      if (action.payload != undefined || action.payload != null)
        state.code = action.payload.code;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.number;
      state.number = action.payload.number;
      state.email = action.payload.email;
      state.question = action.payload.question;
      state.password = action.payload.password;
      state.age = action.payload.age;
      state.weight = action.payload.weight;
      state.BannerData = action.payload.BannerData;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLangugae: (state, action: PayloadAction<'English' | 'Hindi'>) => {
      state.language = action.payload;
      if (action.payload == 'English') {
        state.string = STRINGS.Eng_Strings;
      } else if (action.payload == 'Hindi') {
        state.string = STRINGS.Hin_Strings;
      }
      Utils.storeData('language', action.payload);
    },

    setAge: (state, action: PayloadAction<{age: number; gender: number}>) => {
      console.log(action.payload, 'HAHHA');
      state.age = action.payload.age;
      state.gender = action.payload.gender;
    },
    setBannerData: (state, action: PayloadAction<any>) => {
      state.BannerData = action.payload.response;
    },
    setResult: (
      state,
      action: PayloadAction<{message: string; priority: string}>,
    ) => {
      console.log(action.payload, 'HAHHA');
      state.priority = action.payload.priority;
      state.message = action.payload.message;
    },
    setSelectedOption: (
      state,
      action: PayloadAction<{
        option: AnswersResponse;
        index: number;
      }>,
    ) => {
      const {option, index} = action.payload;
      if (index > -1 && index < 7) {
        if (state.selectedIds[index].includes(option.id + '')) {
          const itemIndex = state.selectedIds[index].indexOf(option.id + '');
          if (itemIndex !== -1) {
            console.warn("click","------")
            state.noOfTheseSelected = false;
            state.selectedIds[index].splice(itemIndex, 1);
          }
        } else {
          if ((state.question?.response[index].type ?? 0) == 2) {
            state.selectedIds[index] = [option.id + ''];
          }
          if ((state.question?.response[index].type ?? 0) == 3) {
            if(option.name_en == 'None of the above'){
              state.selectedIds[index] = [option.id + ''];
              state.noOfTheseSelected = true;
            }else if(!state.noOfTheseSelected)
              state.selectedIds[index].push(option.id + '');
              else{
                state.selectedIds[index] = [option.id + ''];
              state.noOfTheseSelected = false;
              }
          }
        }
      }

      console.log(state.selectedIds, 'INSIDE REDUCERS');
    },
    setSelectedOptionNone: (
      state,
      action: PayloadAction<{
        option: string;
        index: number;
      }>,
    ) => {
      const {option, index} = action.payload;
      if (index > -1 && index < 7) {
        state.selectedIds[index] = [option];
      }
    },
    setQuestionNumber: (state, action: PayloadAction<'NEXT' | 'BACK'>) => {
      const {payload} = action;
      if (payload == 'NEXT' && state.currentQuestionNumber < 6) {
        state.currentQuestionNumber = state.currentQuestionNumber + 1;
      }
      if (payload == 'BACK' && state.currentQuestionNumber > 0) {
        state.currentQuestionNumber = state.currentQuestionNumber - 1;
      }
    },
    resetOption: state => {
      state.currentQuestionNumber = 0;
      state.age = 0;
      state.gender = 0;
      state.selectedIds = [[], [], [], [], [], [], []];
    },
  },
  extraReducers: builder => {
    builder.addCase(getQuestions.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.question = action?.payload;
    });
    builder.addCase(getQuestions.rejected, (state, action) => {
      state.isLoading = false;
      Alert.alert('Error', 'something went wrong');
    });
    builder.addCase(loginApi.pending, (state, action) => {
      state.isLoading = true;
      state.selectedIds = [[], [], [], [], [], [], []];
    });
    builder.addCase(loginApi.fulfilled, (state, action) => {
      state.isLoading = false;
      const {payload} = action;
      if (!payload?.data.response || payload?.data.response == 'failed') {
        Alert.alert('Error', '' + payload?.data?.message);
      } else {
        state.code = action?.payload?.data?.info?.apicode;
        state.email = action.payload?.data?.info?.email;
        state.number = action.payload?.data?.info?.mobile;
        state.lastName = action.payload?.data?.info?.lastname;
        state.firstName = action.payload?.data?.info?.firstname;

        state.BannerData = action.payload?.bannerData?.response as Banner[];
        console.log(action.payload);
      }
    });
    builder.addCase(loginApi.rejected, (state, action) => {
      state.isLoading = false;
      Alert.alert('Error', 'something went wrong');
    });
    builder.addCase(registerApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerApi.fulfilled, (state, action) => {
      state.isLoading = false;
      const {payload} = action;
      if (!payload?.response || payload?.response == 'failed') {
        Alert.alert('Error', '' + payload?.message);
      } else {
        state.code = action?.payload?.info?.apicode;
        state.email = action.payload?.info?.email;
        state.number = action.payload?.info?.mobile;
        state.lastName = action.payload?.info?.lastname;
        state.firstName = action.payload?.info?.firstname;
        console.log(action.payload);
      }
    });
    builder.addCase(registerApi.rejected, (state, action) => {
      state.isLoading = false;
      Alert.alert('Error', 'something went wrong');
    });
    builder.addCase(updatePassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.isLoading = false;
      const {payload} = action;
      console.log('response get', action.payload);
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.isLoading = false;
      Alert.alert('Error', 'something went wrong');
    });
  },
});

export const {
  resetOption,
  logout,
  login,
  setLangugae,
  setLoading,
  setSelectedOption,
  setResult,
  setAge,
  setBannerData,
  setQuestionNumber,
  setSelectedOptionNone,
} = userSlice.actions;

export default userSlice.reducer;
