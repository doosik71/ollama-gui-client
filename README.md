# 서비스 중지하하기

```bash
sudo systemctl stop ollama
systemctl status ollama
```

## 서버로 실행하기

```bash
export OLLAMA_HOST=129.254.233.72:11434
export OLLAMA_ORIGINS=http://129.254.233.72:8086
ollama serve
ollama pull mistral
ollama pull orca2
```

## 포트 허용하기

```bash
sudo ufw allow 8086
```

## 실행 확인하기

- <http://129.254.233.72:11434/>
