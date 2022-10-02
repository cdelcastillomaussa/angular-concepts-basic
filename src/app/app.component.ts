import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app_Store';

  widthImg = 10;
  name = 'carlos';
  age = 22;
  img = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDg0ODQ0PDQ0NDQ4NDQ4NDg8ODg0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx80OTctOCgtLisBCgoKDg0OGxAQGy4jICU4LTAwLSstLSstKy0rLystLS0tLS0tLS0rLSstLS0rLSstLS04Ky0tLS0tLS0tLS0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAQMEAgj/xABFEAACAQEEBAcNBgYCAwEAAAAAAQIDBAURIQYSMVEiNEFhcXOxExQVFlJTVHKBkZKT0QcyobLS4UJDYrPB8CMzgsLiF//EABoBAQADAQEBAAAAAAAAAAAAAAABBAUDBgL/xAA0EQACAQEEBgkEAgMBAAAAAAAAAQIDBBEhMRITQVFx8AUUMmGBkaGx0RUiUsEz4SPC8WL/2gAMAwEAAhEDEQA/AO8AGMedAAAAAAAAAAAAAAAAPddlz2i04ulBasXg5zerHHdjyvoJDxRtm+HzP2PuNOclekdY0akleosgQT3ijbN8PmfsPFG2b4fM/Y+tTU3E9Xq/iyBBPeKNs3w+Z+w8UbXvp/M/YampuHV6v4sgQT3ijbN8PmfsPFG2b4fM/YampuHV6v4sgQT3ijbN8PmfsPFG2b4fM/YampuHV6v4sgQT3ijbN8PmfsHojbN8PmfsNTU3Dq9X8WQIPqtSlCUoTi4zi8JRe1M+TkcgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaTo5BKx2bBYY03J9Lk22dta86MJOLk8Vk8ItpPcdej/FLP1a7TxVbmquUmpQwcm9suV9Bs0ktFcEbM5ThTjoK/L2Pd4Ys/lS+FjwxZ/Kl8LI/wJV8qHvl9B4Eq+VD3y+h96MTjrq+7nzJDwxZ/Kl8LHhiz+VL4WRNruypSjrycXFNJ6reWPSjxE6CPh2qrF3NLnxLH4YoeVL4WPDFn8qXwsrYJ0ER1yp3c+JZPDFn8qXwseGLP5UvgZWwNBDrlTu58SyeGLP5UvgY8LUHkpSxeS4L2lbPqm+FH1l2jQQ65U7iTvq54WmOKwjWiuBPevJlzdhRq9GdOcoVIuM4vBpmmEbfN0wtMfJqxXAn/wCr3oo1qGnjHP3LFpsus+6OfuUIHZabPOlOVOpFxnHan2rejrKBkgAEEAAAAAAAAAAAAAAAAAAkAAAAAAAAAAAAABgGlaP8Us/VrtJEj9H+J2fq12lftH35+vLtZs0lfFcEa1Wrq4Rwv/4i3gpp8ykknKTUYxWMpN4KK3s66F+COHWv/Pr/AEW+1WeNSOrPHV2vB4Y4bytXteF2WbFSnKU/JhLWZV6l42q2Ve9rupzk2uFNcGWr5cm8oR/F9ORZLn+zejHCduqytE3m6VJyp0U+eX359OK6C51enRX+eWP4rPx3HzpSr9iC4vLw3lYtWllOL4FN83dJxh9Ty+NVTaqccN+Lw9+Br1huax2dYULLRpc8KcYyfS8MWe1wW4jrVBZUvNn11Cbzn6GM0NLMdtOMvUkmyUsl/WeplrdzlunkveaHbrksdoWFaz0qnPOEZNdDaxRTr7+zmm052Kbpy29yqOU6b6G+FH3voJjVstTBxcPVc+BynZK0MU1L0ZynyrNAptO12uwVe5VoSSWbpzeKcfKhLlXOvaWqw22nXgp03itjXLF7mfNazypXPNPJrIrqSZ6qF/VaetCdNVVGTUZa2rLVxyTyeJ2rSV+jv5n/AMnndOLzwOIUo4rLlRV0UWlaZpXXnsv6nCtSnKVLVnSg5QmnmsscHlminGm3tSirPXeH8mp+RmZGXal9yZ9W9JTT3gAFUogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBgGl6P8Ts/VrtK/aPvz9eXaywaP8Us/VrtIK0R4c/Xl2s26PZXBGjav44c7EdCK1b69W32iNksv3E8XLPVeDzqy3xWxLleG/KR0nt3caDinhOrjHHljBLhP3Ze0sX2d3EqFnVepHCtXwnLFZxWHAh7E/e2aNNqhS1zzeEfkqQpurPQXjw3fJO6N3NRsVnjSpQwk8JVZvBzq1OWUnv5ti2IlzrnNJNtpJJtt5JJbWyn2zSzWqSjGD7isk08Jy/qa3cxk1ayjjN4s9FZbHUrfbTWCLTXt9OGWOs/6c/xPFO/Ir+W3/5L6ECrzoz2TSe6XBf4nM7NXaxVCo1zQl9Dg6zeRoRsEI9ted6+Ceo3/Z28J61N75Lg+9EpTmmk4tSTzTTxTXSZvaqmq3GWMZLbGSakvYT+h9K0cKo5NWd4pQl/HLyo7kt/KKVdylosWro+FOnrE7uO3hx8fAkdIrhoW2k4VI8JZwmspRlvT5H/AKzJKsLRdlqlGaxw++llGtSx+8tz7H+O6FS+0C4labO6sI41qOM4YLOWWcfalh0qJr2O0KL1c+y/Q8zbLPpLWRzXqRFnrRqQjODxjNKUXzHbHauldpV9DLbwqlmk8sO7Uej+Jdj95bIxzXShWpOlUcGUE71eWS9uLWjqav5GZejUL34taepq/kZl6MS15rncXekO1EAAqGeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaXo9xOzdUiHrR4c/Xl2kvo9xOzdUiMrLhy9aXabVLsrgjStH8cOdiKXeMO+rzoWd5w7pCElyOEU6k/fGOBr9nhqwjHcs+nlMm0WWvfDb5I15e3gx7GzXy/0h9sow3JEWBJqUu/n2IbSXGVHuKk4urji1lkuR8zZQqtiqxmqbi3KbUYYLFTbeCwLxfn/ZHmidd00YyqxbSepw44rZLZieDnbqs+lHQzi2o8Lli1v2u5+h6yx2jq1C+69Z+PNx6LjuKlZoqUkp1muFUeeq90Ny59rJo4ITSq1VKVKnKlOUG6mDccsVqt4HrqFFSkqccDEtNolK+rUd7JG3WCjXSjWpqaTTWO1dDWZ6IxSSSSSSSSWSS3IoHhq1+kT948M2v0ifvL/0yf5L1KL6QTSjc7lw+TQT4qw1oyjvTRUdHrytE7TThUqznGWvipPFZQbXYXEqV6Doy0XjtLFGqqsb0YhbaKsl7RX3YRtcV0UamGPuU2vYaf4Hiv5jy/pRnH2nx1bZJrJ9ypy9qnJf4RotW/aFOMXVlqa2GGs4rFvdnmXLY3KNOe1r2uMyjGmnNT2M9d7cWtHU1fyMy9GoXtxa0dTV/IzL0eftecedx3t/aiAAVDPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANK0e4nZuqR4Kq4UvWfaSGj3E7N1SKDfeldZValOjTjT1JOGvLhyeEmsUti/E2qKviuCNC1VY06UHLnA81w142e9saklCLdem5Sa1U3HWWLfPHA2GMk0mnimk01saexmAWutOclWk9ao3rt5LWnGWP4pmxaF3krRYqTxxlTShL1f4H7sPczRt8dJQq70cej7QtN09+K/a9V67jtvyGE4S8pdhG2K8qdKvBN5SerN8kE+V+3Anr3skqtGcIPVqJYwfRye3YZ9KLTaaaabTTyafKmePl0Ulbnam9qaS3pLPuvxu23+ehbekqlGnGlCOebfHJft7Nm9aeeG9rtjaYRhOUoqM9dOOGLeDXL0lfubSPucVTtCcorKM1nKK3SXL07SfjfNkax74iunWi/c8zdp1bmpRdzR8QtFGtHFrvTI3xSoedq+6H0K/fdipUKvcqc5TainNywyk9iy5sPeWC8tJqcU42f8A5JvLXknGEefPN9hUaknJuUm5Sk223m23ymvYK8603pTvu2YefgUbRKh2ad1+9E1ohRcrTrclOnJ4874K7X7i6kRo3d7oUcZrCrValNcsV/DH/d40qvBWex1p44SlF04b8Xji/YsX7Cna6mtrfbwRdo3UKDlPZe3zwMn+0K2wr2ucqclOOrTpqSzTeMpPD4iJpSlKpByblJ1I4uTbbzXKzotEteqluxqvmzy/weiguHD149petS0dGn+KPN16jk1pZvF+Jt18cXtPU1PyMy5Go3xxe09TU/IzLkeZtecedxvdIdpeIABUM8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0vR3idm6pGQXxOKtNfFr/ALZ9rNf0d4nZuqRiV9catPX1P7jNyzu5Lgix0nG+jT52Hcs00nzp8/IT2hF/ux11GWPcqn3o/wBO5c6ea5sVyFRhUcdj+h3Kti9mD5cHte9c5qUJwqRdGeTy4mVS0o3XPFYp7ufZtH6Jo1YzjGcJKUJJSjJZqSfKiKvq4oWjhwap1sNv8MvW5+cz3RDTCdlwpVv+SjJ71FJ71ufNsfMafd95ULRHWo1FPetko9K2ozrRZpU3oyWBvUbTStUdXNXS2x/ae1d6y23ZFFtlgr0XhVpyivKwxT6JLI8uJqB0uz0m8XTi3v1Y4lN0dzOUujFf9svNGd2ay1arwpU5Tf8ASsl0vYi1XJo8qTVWvhKos4wWcYPe97LAklksluWSPHeN40LNDXr1Y048mOcpc0YrNvoPuFPRd+060rFTo/fN33bXglz3s9M5qKcpNRjFNybeCSW1tmR6e6RK01WoN9xpJxitmtvfS8vYlzno0u01lXjKnQxpUU828MZ87w5ebtM9tVqcpZbE8c88+c2rHZdX/lnnsX7ZTtNp6y9CHYW38mv0s1vdzyWPvstN4OcvvTz6FyI9VBcOHrx7TzWe2QkljwXy5ZHfTtEFOGDxevHJLnONRtyblmYs1NzxWJtl8cXtPU1PyMy5Go3xxe09TU/IzLkYFrzjzuPS9IdpeIABUM8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0vR3idm6pGJX3xq09fU/uM23R3idm6pGJX3xq09fU/uM26GS4ItdI/ww8PY8QALJjnZGo1/u3pPdY71q0mnCpKLWzOTjHowzRGgtQtcorRmtJd5LaeEleXi79PrdBJSqKsl5UYS/HJkj/wDpNow4tTx36svqZtgMOd+8Pqks4tFiNpqRVyqS8cfV3l6t/wBoFumsI1FRX9MIL8Xiyq26951ZOU5zqTe160mn0t5kdqI5JVejT/ihjvZznU03fNuXFu7y+BNuWcn0JbEdPcsHzHccnwrTPT0pYkRqyTOaEM1idsKbjUp7teOD9qOKG1bz1bnuaa6UaM6ELRT0ovHY/wBPu9iZtPFG4Xxxe09TU/KzLkXewaQUrdYrQ1hCvCzz7tSx+69V8KO+LKQjyFuhKE1GSua/o17bOM9GUcmAAUSiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwADStH+KWfq12mb3xoNeTtNeVOjGpTnWqVITVSlHGMpNrFSaaeZeNFr3oyoU6M5xp1aScNWbUdeOOTjjty7Ca75pedp/HH6mxRqLRVxqyo07RTje8t127vvMh8Rb19FXzqP6h4i3t6KvnUf1Gvd80vO0/jj9R3zS87T+OP1OutZy+mUd7818GQ+It7eir51H9Q8Rb29FXzqP6jXu+aXnafxx+o75pedp/HH6jWsfTKO9+a+DIfEW9vRY/Oo/qHiLevoq+dR/Ua93zS87T+OP1HfNLztP44/Ua1kfTKO9+a+DIfEW9vRV86j+oeIt7eir51H9Rr3fNLztP44/Ud80vO0/jj9RrWT9Mo735r4Mh8Rb29FXzqP6h4i3t6KvnUf1Gvd80vO0/jj9R3zS87T+OP1GtY+mUd7818GRLQa91mrKvnUf1HVeVxWyyxjO00HTjJ6qkpQnHW3Nxbw9psXfVLztP44/U67U7NVpzpVZU505rVlGU44Ne8sWa2yoy3raudp8y6Np3fbJ399zXsYrQrzpy1qcnGWrKLa5YyWEovemiTs1oU1uktqGk1zKyVtWnVjWoz4VOSlGU4LyZJbHz8pEwm4tNPBo0rbY6VvpKUHjsf6fdfhvT9ct6VKTjInQdNmtCmt0ltR3HjKtKdKbhNXNbOfRnZO8AA5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHGqjkAXHGqhqo5AIuONVDVRyALjjVQ1UcgC441UNVHIAuONVDVRyALjjVQ1UcgC4+JQTTTWKe1EXarM4PfF7H/hkufM4ppprFPai/0fb52Sd6xi81+13+/k18yjeiFhNxaaeDRLWa0Ka3SW1EdarM4PfF7H/hn3d9KTkpLKMccXvy2HoukqVntVl6wnksJf6tZ4vC7NPxOcW4u4lAAeOO4AAAAAAAAAAAAAAAAAIAAAAABIAAAAAIAABIAAAAAAAAAAAIAAAAAAAABJxqp5NYrcxqpLBLBbkcAjSet0b8L8thB9AAkkAAAAAEAAAAAAk//Z';
  btnDisabled = true;

  // Renderizar object o JSON
  person = {
    name: 'Alberto',
    age: 23,
    avatar: 'data:image/jpeg;base64,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'
  }

  //Creacion de array
  names: string[] = ['Carlos', 'Juan', 'Nico'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  products: Product[] = [
  {
    name: 'El mejor juguete',
    price: 543,
    category: 'Niños',
    img: './assets/images/2.png'
  },
  {
    name: 'Bicicleta casi nueva',
    price: 500,
    category: 'Trasporte',
    img: './assets/images/1.jpeg'
  },
  {
    name: 'Collecion de albumnes',
    price: 34,
    category: 'Entretenimiento',
    img: './assets/images/4.jpg'
  },
  {
    name: 'Mis libros',
    price: 23,
    category: 'Escolar'
  }
  ]


  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increage(){
    this.person.age += 1;

  }


  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);


  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;


  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }


}
