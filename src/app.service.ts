import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getAddress(address: string) {
    try {
      const response = await axios.get(
        `https://geocode.maps.co/search?q=${encodeURIComponent(address)}`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }

  async getForecast(latitude: string, longitude: string) {
    try {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  }
}
