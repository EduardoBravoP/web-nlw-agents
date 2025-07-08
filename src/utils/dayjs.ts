import dayjsLib from 'dayjs';
import 'dayjs/locale/pt-BR';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjsLib.extend(relativeTime);
dayjsLib.locale('pt-BR');

export const dayjs = dayjsLib;
