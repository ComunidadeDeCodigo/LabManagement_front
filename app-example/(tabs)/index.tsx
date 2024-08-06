import { Image, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#fff', dark: '#000' }}
      headerImage={
        <Image
          source={require('@/assets/images/lab1.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Gerenciamento de Laboratório Escolar</ThemedText>
        <HelloWave />
      </ThemedView>
        <ThemedText style={styles.titleContainer}>Organização do laboratório</ThemedText>
        <ThemedText style={styles.texto}>Com esta app, o nosso sistema, maximiza de forma eficaz e eficiente a segurança dos equipamentos dentro do laboratório.</ThemedText>
        <ThemedText style={styles.texto}>Tornando o  laboratório dividido em áreas específicas, para diferentes tipos de actividades.</ThemedText>
        <View>
          <Text style={styles.areas}>Estações de Trabalho</Text>
          <Text style={styles.areas}>Armazenamento</Text>
          <Text style={styles.areas}>Segurança</Text>
        </View>
        <ThemedText style={styles.titleContainer}>Agendamento de Uso</ThemedText>
        <ThemedText style={styles.texto}>O sistema de agendamento garante que os alunos e professores possam usar o laboratório de forma organizada. </ThemedText>
        <ThemedText style={styles.texto}>E ainda Calendário para manter visível o horário de aulas, sessão de estudos e periódos de manutenção do mesmo laboratório. </ThemedText>

        <View>
          <Text style={styles.areas}>Inventário detalhado</Text>
          <Text style={styles.areas}>Sistema de Controle</Text>
          <Text style={styles.areas}>Suporte Técnico</Text>
          <Text style={styles.areas}>Reciclagem</Text>
          <Text style={styles.areas}>Consumo consciente</Text>
        </View>
        <ThemedText style={styles.titleContainer}>Resumo</ThemedText>
          <ThemedText style={styles.texto}>O Gerenciamento de um laboratório escolar envolve várias áreas, como organização de equipamentos, agendamento de uso, manutenção, segurança, controle de inventário, e suporte técnico.</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    fontWeight:"bold",
    color:"darkcyan"
  },
  areas:{
    color:"darkcyan",
    fontWeight:"500"
  },
  texto:{
    color:"#434343"
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 1300,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
