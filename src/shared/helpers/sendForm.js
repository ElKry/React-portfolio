import axios from "axios";

export const sendForm = async (formData) => {
  try {
    await axios.post("http://localhost:3002/api/send-email", {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
    });

    // Действия после успешной отправки формы
  } catch (error) {
    // Обработка ошибки отправки формы
  }
};

export const sendHookForm = async (data) => {
    try {
      await axios.post("http://localhost:3002/api/send-email", {
        name: data.name,
        email: data.email,
        subject: data.subject,
      });
  
      // Действия после успешной отправки формы
    } catch (error) {
      // Обработка ошибки отправки формы
    }
  };
